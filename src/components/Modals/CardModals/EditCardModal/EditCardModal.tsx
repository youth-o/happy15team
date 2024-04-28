import Image from "next/image";
import styles from "./EditCardModal.module.css";
import { MouseEvent, useEffect, useRef, useState } from "react";
import setModals from "@/lib/zustand";
import Participants from "@/components/Nav/Participants/Participants";
import { DayPicker } from "react-day-picker";
import moment from "moment";
import { putEditCard, uploadCardImage } from "@/api/DashboardData";
import modalState from "@/lib/modalState";

const EditCardModal = () => {
  const { setOpenModal } = modalState();
  const {
    openedCardData,
    openedModalId,
    columnState,
    dashboardMembers,
    cardImageUrl,
    setCardImageUrl,
  }: any = setModals();
  const [viewAssignee, setViewAssignee] = useState(false);
  const [prevCardData, setPrevCardData] = useState();
  const [assignee, setAssignee] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [selected, setSelected] = useState<Date>();
  const [tagInputValue, setTagInputValue] = useState<any>("");
  const [tags, setTags] = useState();
  const [viewCalender, setViewCalender] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const formatDate = moment(selected).format("YYYY-MM-DD hh:mm");
  const imageInput = useRef<HTMLInputElement>(null!);

  const handleImageChange = async (e: React.ChangeEvent) => {
    const token = localStorage.getItem("accessToken");
    const file = imageInput.current?.files?.[0];
    if (file && token) {
      const imageUrl = URL.createObjectURL(file);
      const id = prevCardData.columnId;
      setImage(imageUrl);
      const profileImageUrl = await uploadCardImage(token, file, id);
      setCardImageUrl(profileImageUrl);
    }
  };

  console.log(assignee);

  const handleSubmit = async () => {
    const cardData = {
      assigneeUserId: assignee
        ? Number(assignee.userId)
        : Number(prevCardData.assignee.id),
      columnId: Number(prevCardData.columnId),
      title: title ? title : prevCardData.description,
      description: description ? description : prevCardData.description,
      dueDate: formatDate,
      tags: tags,
      imageUrl: cardImageUrl,
    };

    const noImgCardData = {
      assigneeUserId: assignee
        ? Number(assignee.userId)
        : Number(prevCardData.assignee.id),
      columnId: Number(prevCardData.columnId),
      title: title ? title : prevCardData.description,
      description: description ? description : prevCardData.description,
      dueDate: formatDate,
      tags: tags,
    };

    const result = confirm("변경사항을 적용하시겠습니까?");
    if (!result) return;
    const cardId = prevCardData.id;
    const token = localStorage.getItem("accessToken");
    if (token) {
      await putEditCard(token, cardImageUrl ? cardData : noImgCardData, cardId);
      setOpenModal("openCheckCardModal");
    }
  };

  const addTags = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && tagInputValue.length < 1) {
      alert("태그는 1글자 이상 작성바랍니다");
      return;
    }
    if (e.key === "Enter" && tags.length >= 4) {
      alert("태그는 최대 4개까지 생성 가능합니다");
      return;
    }
    if (e.key === "Enter") {
      setTags((prev) => [...prev, tagInputValue]);
      setTagInputValue("");
    }
  };

  const handleTagClick = (indexToRemove) => {
    setTags((prevTags) =>
      prevTags.filter((_, index) => index !== indexToRemove)
    );
  };

  const handleCloseModal = () => {
    setOpenModal("");
  }

  useEffect(() => {
    setPrevCardData(openedCardData);
    setTags(openedCardData.tags);
    setImage(openedCardData.imageUrl ? openedCardData.imageUrl : "");
  }, []);

  if (!prevCardData) return null;

  return (
    <>
      <h1 className={styles.modalTitle}>할 일 수정</h1>
      <form className={styles.modalForm}>
        <div className={styles.modalHeader}>
          <div onClick={() => setViewAssignee(!viewAssignee)}>
            <label>담당자</label>
            <div className={styles.managerInput}>
              <input
                readOnly
                placeholder={prevCardData.assignee.nickname}
                value={assignee?.nickname}
              />
              <Image
                src="/images/dropDown.svg"
                width={40}
                height={40}
                alt="드롭다운이미지"
                className={styles.dropDownImage}
              />
              {viewAssignee &&
                dashboardMembers?.map((member, index) => (
                  <div key={index} className={styles.assigneeWrapper}>
                    <div
                      onClick={() => {
                        setAssignee(member);
                      }}
                      className={styles.assignee}
                    >
                      <Participants user={member} />
                      <span>{member.nickname}</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <label>
          제목 <span className={styles.essentialTag}>*</span>
        </label>
        <input
          className={styles.titleInput}
          placeholder={openedCardData.title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>
          설명 <span className={styles.essentialTag}>*</span>
        </label>
        <textarea
          placeholder="변경사항 입력"
          className={styles.descriptionInput}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>마감일 </label>

        <div
          onClick={() => setViewCalender(!viewCalender)}
          className={styles.deadlineInput}
        >
          <input readOnly value={formatDate} />
          <Image
            src="/images/calendar.svg"
            width={22}
            height={22}
            alt="달력이미지"
            className={styles.calendarImage}
          />

          <span>이전 마감일 : {prevCardData.dueDate}</span>
        </div>
        {viewCalender && (
          <div className={styles.calendar}>
            <DayPicker
              showOutsideDays
              mode="single"
              selected={selected}
              onSelect={setSelected}
            />
            <button
              className={styles.confirmButton}
              onClick={() => setViewCalender(!viewCalender)}
            >
              닫기
            </button>
          </div>
        )}
        <label>태그</label>
        <input
          placeholder="입력 후 Enter"
          className={styles.tagInput}
          onKeyDown={addTags}
          value={tagInputValue}
          onChange={(e) => setTagInputValue(e.target.value)}
          maxLength={10}
        />
        {tags && (
          <div className={styles.tags}>
            {tags.map((tag, index) => (
              <div
                key={index}
                className={`${styles.tag} ${
                  index % 4 === 0
                    ? styles.green
                    : index % 4 === 1
                    ? styles.purple
                    : index % 4 === 2
                    ? styles.orange
                    : index % 4 === 3
                    ? styles.blue
                    : ""
                }`}
                onClick={() => handleTagClick(index)}
              >
                {tag}
              </div>
            ))}
          </div>
        )}
        <label>이미지</label>
        <div className={styles.imageSection}>
          <label htmlFor="uploadImage">
            <div className={styles.uploadBtn}>✖️</div>
          </label>
          <input
            id="uploadImage"
            type="file"
            accept="image/*"
            className={styles.imageInput}
            onChange={handleImageChange}
            ref={imageInput}
          />
          <div className={styles.preview}>
            <span>이미지 미리보기</span>
            <div className={styles.previewImg}>
              <Image
                src={image ? image : ""}
                width={70}
                height={70}
                alt="이미지프리뷰"
                className={image ? "" : styles.noImg}
              />
            </div>
          </div>
        </div>
      </form>
      <div className={styles.modalButtons}>
        <button onClick={handleCloseModal}>취소</button>
        <button onClick={handleSubmit} className={styles.inviteButton}>
          변경
        </button>
      </div>
    </>
  );
};

export default EditCardModal;
