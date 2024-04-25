import Image from "next/image";
import styles from "./CreateCardModal.module.css";
import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from "react";
import setModals from "@/lib/zustand";
import Participants from "@/components/Nav/Participants/Participants";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import moment from "moment";
import { getCardData, postAddCard } from "@/api/DashboardData";

const CreateCardModal = () => {
  const {
    closeCreateCardModal,
    dashboardMembers,
    dashboardData,
    openedModalId,
  }: any = setModals();
  const [image, setImage] = useState<string | null>(null);
  const [viewAssignee, setViewAssignee] = useState(false);
  const [viewCalender, setViewCalender] = useState(false);
  const [manager, setManager] = useState();
  const imageInput = useRef<HTMLInputElement>(null!);

  const [selected, setSelected] = useState<Date>();
  const formatDate = moment(selected).format("YYYY-MM-DD hh:mm");
  const [tags, setTags] = useState<string[]>([]);
  const [tagInputValue, setTagInputValue] = useState<any>("");
  const [cardInfo, setCardInfo] = useState({
    assigneeId: "",
    title: "",
    description: "",
  });
  console.log(image);

  const handleImageChange = (e: React.ChangeEvent) => {
    const file = imageInput.current?.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const result = reader.result;
        if (typeof result === "string") {
          setImage(result);
        }
      };
    }
  };

  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickModalOutside = (e: MouseEvent) => {
    if (modalRef.current === e.target) {
      closeCreateCardModal(); //모달 바깥쪽 클릭했을 때 닫히는 로직 (후에 inputValue값 같이 초기화 시키기)
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCardInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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

  const handleSubmit = async () => {
    const cardData = {
      assigneeUserId: manager.userId,
      dashboardId: dashboardData.id,
      columnId: openedModalId,
      title: cardInfo.title,
      description: cardInfo.description,
      dueDate: formatDate,
      tags: tags,
      imageUrl:
        "https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/taskify/task_image/4-15_22540_1713969821043.png",
    };
    const token = localStorage.getItem("accessToken");
    if (token) {
      await postAddCard(token, cardData);
      closeCreateCardModal();
    }
  };

  return (
    <div
      className={styles.modalOverlay}
      onClick={handleClickModalOutside}
      ref={modalRef}
    >
      <div className={styles.modalWrapper}>
        <h1 className={styles.modalTitle}>할 일 생성</h1>
        <form className={styles.modalForm}>
          <label>담당자</label>
          <div
            className={styles.managerInput}
            onClick={() => {
              setViewAssignee(!viewAssignee);
            }}
          >
            <input
              readOnly
              value={manager?.nickname}
              placeholder="담당자를 선택해 주세요"
              // onChange={handleManagerInputChange}
              name="assigneeUserId"
            />
            <Image
              src="/images/dropDown.svg"
              width={40}
              height={40}
              alt="드롭다운이미지"
              className={styles.dropDownImage}
            />
            {viewAssignee &&
              dashboardMembers.map((member) => (
                <div className={styles.assigneeWrapper}>
                  <div
                    onClick={() => {
                      setManager(member);
                    }}
                    className={styles.assignee}
                  >
                    <Participants user={member} />
                    <span>{member.nickname}</span>
                  </div>
                </div>
              ))}
          </div>
          <label>
            제목 <span className={styles.essentialTag}>*</span>
          </label>
          <input
            placeholder="제목을 입력해 주세요"
            className={styles.titleInput}
            onChange={handleInputChange}
            name="title"
          />
          <label>
            설명 <span className={styles.essentialTag}>*</span>
          </label>
          <textarea
            placeholder="셜명을 입력해 주세요"
            className={styles.descriptionInput}
            onChange={handleInputChange}
            name="description"
          />
          <label>마감일</label>
          <div
            className={styles.deadlineInput}
            onClick={() => setViewCalender(!viewCalender)}
          >
            <input
              placeholder="날짜를 입력해 주세요"
              name="dueDate"
              value={formatDate}
            />
            <Image
              src="/images/calendar.svg"
              width={22}
              height={22}
              alt="달력이미지"
              className={styles.calendarImage}
            />
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
          <button onClick={closeCreateCardModal}>취소</button>
          <button onClick={handleSubmit} className={styles.inviteButton}>
            생성
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateCardModal;
