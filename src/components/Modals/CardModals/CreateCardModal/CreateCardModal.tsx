import Image from "next/image";
import styles from "./CreateCardModal.module.css";
import { ChangeEvent, MouseEvent, useRef, useState } from "react";
import setModals from "@/lib/zustand";

const CreateCardModal = () => {
  const { closeCreateCardModal }: any = setModals();
  const [image, setImage] = useState<string | null>(null);
  const imageInput = useRef<HTMLInputElement>(null!);

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
          <div className={styles.managerInput}>
            <input placeholder="이름을 입력해 주세요" />
            <Image
              src="/images/dropDown.svg"
              width={40}
              height={40}
              alt="드롭다운이미지"
              className={styles.dropDownImage}
            />
          </div>
          <label>
            제목 <span className={styles.essentialTag}>*</span>
          </label>
          <input
            placeholder="제목을 입력해 주세요"
            className={styles.titleInput}
          />
          <label>
            설명 <span className={styles.essentialTag}>*</span>
          </label>
          <textarea
            placeholder="셜명을 입력해 주세요"
            className={styles.descriptionInput}
          />
          <label>마감일</label>
          <div className={styles.deadlineInput}>
            <input placeholder="날짜를 입력해 주세요" />
            <Image
              src="/images/calendar.svg"
              width={22}
              height={22}
              alt="달력이미지"
              className={styles.calendarImage}
            />
          </div>
          <label>태그</label>
          <input placeholder="입력 후 Enter" className={styles.tagInput} />
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
          <button className={styles.inviteButton}>생성</button>
        </div>
      </div>
    </div>
  );
};

export default CreateCardModal;
