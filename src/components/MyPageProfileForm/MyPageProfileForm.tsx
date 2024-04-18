import styles from "./MyPageProfileForm.module.css";
import { useRef } from "react";
import { useState, useEffect } from "react";
import UserService from "@/api/UserService";
import axios from "@/lib/axios";
import Image from "next/image";

function ProfileForm() {
  const imageInput = useRef<HTMLInputElement>(null!);
  const [image, setImage] = useState<string | null>(null);
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    // 회원 정보를 가져와서 이메일 정보를 설정
    const fetchUserData = async () => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        try {
          const userData = await UserService.getUserData(token);
          setEmail(userData.email);
          // 사용자 정보를 처리
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        // 토큰이 없을 경우 로그인 페이지로 리디렉션 또는 인증 필요 메시지 표시
      }
    };

    fetchUserData();
  }, []);

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

  const handleProfileUpload = async () => {
    if (image) {
      try {
        const formData = new FormData();
        formData.append("image", image);
        const response = await axios.post("/users/me/image", formData);
        console.log("Image uploaded successfully!");
        // 이미지 업로드 후 어떤 작업을 수행할지 추가
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
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
          objectFit="cover"
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
            <input
              className={styles.emailInput}
              type="text"
              id="email"
              readOnly
              placeholder={email}
            />
          </div>
          <div className={styles.editContainer}>
            <label htmlFor="nickname">닉네임</label>
            <input type="text" id="nickname" />
          </div>
        </div>
      </div>
      <button
        type="submit"
        className={styles.formBtn}
        onClick={handleProfileUpload}
      >
        저장
      </button>
    </form>
  );
}

export default ProfileForm;
