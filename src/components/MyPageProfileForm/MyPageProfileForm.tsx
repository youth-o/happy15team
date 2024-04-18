import styles from "./MyPageProfileForm.module.css";
import { useRef } from "react";
import Image from "next/image";

function ProfileForm() {
  // useRef를 이용해 input태그에 접근한다.
  const imageInput = useRef<HTMLInputElement>(null!);

  // 버튼클릭시 input태그에 클릭이벤트를 걸어준다.
  const handleCickImageUpload = () => {
    imageInput.current.click();
  };

  return (
    <form className={styles.form}>
      <div className={styles.profileLabel}>프로필</div>
      <div className={styles.inputContainer}>
        <div className={styles.fileContainer}>
          <Image
            className={styles.fileAddImg}
            src="/images/add.svg"
            width={30}
            height={30}
            alt="추가아이콘"
            onClick={handleCickImageUpload}
          />
          <input type="file" ref={imageInput} />
        </div>
        <div>
          <div className={styles.editContainer}>
            <label htmlFor="email">이메일</label>
            <input type="text" id="email" />
          </div>
          <div className={styles.editContainer}>
            <label htmlFor="nickname">닉네임</label>
            <input type="text" id="nickname" />
          </div>
        </div>
      </div>
      <button className={styles.formBtn}>저장</button>
    </form>
  );
}

export default ProfileForm;
