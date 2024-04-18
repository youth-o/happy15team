import styles from "./MyPageProfileForm.module.css";
import { useRef } from "react";
import { useState, useEffect } from "react";
import UserService from "@/api/UserService";
import axios from "@/lib/axios";
import Image from "next/image";
import { UserData } from "@/types/interface";

function ProfileForm() {
  const imageInput = useRef<HTMLInputElement>(null!);
  type UserFormInput = Pick<UserData, "email" | "nickname" | "profileImageUrl">;
  const [formData, setFormData] = useState<UserFormInput>({
    email: "",
    nickname: "",
    profileImageUrl: "",
  });

  useEffect(() => {
    // 회원 정보를 가져와서 이메일 정보를 설정
    const fetchUserData = async () => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        try {
          const userData = await UserService.getUserData(token);
          setFormData(userData);
          // 사용자 정보를 처리
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
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
          setFormData((prevFormData) => ({
            ...prevFormData,
            profileImageUrl: result,
          }));
        }
      };
    }
  };

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      nickname: value,
    }));
  };

  const handleClickImageUpload = () => {
    imageInput.current.click();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const token = localStorage.getItem("accessToken");
    if (token) {
      try {
        // 변경된 nickname과 profileImageUrl을 서버로 전송
        await axios.put(
          "/users/me",
          {
            nickname: formData.nickname,
            profileImageUrl: formData.profileImageUrl,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // 변경된 profileImageUrl을 서버로 전송
        await axios.post(
          "/users/me/image",
          {
            profileImageUrl: formData.profileImageUrl,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // 서버로의 요청이 성공적으로 이루어졌을 때, 사용자에게 메시지를 표시하거나 다른 작업을 수행할 수 있습니다.
        alert("저장되었습니다.");
      } catch (error) {
        console.error("Error updating user data:", error);
      }
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.profileLabel}>프로필</div>
      <div className={styles.inputContainer}>
        <Image
          className={styles.fileAddImg}
          src={
            formData.profileImageUrl
              ? formData.profileImageUrl
              : "/images/add.svg"
          }
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
              placeholder={formData.email}
            />
          </div>
          <div className={styles.editContainer}>
            <label htmlFor="nickname">닉네임</label>
            <input
              className={styles.nicknameInput}
              type="text"
              id="nickname"
              placeholder={formData.nickname}
              value={formData.nickname}
              onChange={handleNicknameChange}
            />
          </div>
        </div>
      </div>
      <button type="submit" className={styles.formBtn}>
        저장
      </button>
    </form>
  );
}

export default ProfileForm;
