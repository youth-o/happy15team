import styles from "./MyPageProfileForm.module.css";
import { useRef } from "react";
import { useState } from "react";
import Image from "next/image";

function ProfileForm() {
  const imageInput = useRef<HTMLInputElement>(null!);
  const [image, setImage] = useState<string | null>(null);

  // 파일이 선택되었을 때 호출되는 함수
  const handleFileChange = (e: React.ChangeEvent) => {
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
    console.log(image);
  };

  const handleClickImageUpload = () => {
    imageInput.current.click();
  };

  return (
    <form className={styles.form}>
      <div className={styles.profileLabel}>프로필</div>
      <div className={styles.inputContainer}>
        <Image
          className={styles.fileAddImg}
          src={image ? image : "/images/add.svg"}
          width={182}
          height={182}
          alt="추가아이콘"
          onClick={handleClickImageUpload}
        />
        <input
          className={styles.fileInput}
          type="file"
          accept="image/*"
          ref={imageInput}
          onChange={handleFileChange}
        />
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
