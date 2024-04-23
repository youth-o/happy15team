import styles from "./MyPageProfileForm.module.css";
import { useRef } from "react";
import { useState, useEffect } from "react";
import UserService from "@/api/UserService";
import axios from "@/lib/axios";
import Image from "next/image";
import { UserData } from "@/types/interface";
import setModals from "@/lib/zustand";
import NicknameErrorModal from "../Modals/NicknameErrorModal/NicknameErrorModal";
import { isAxiosError } from "axios";

function ProfileForm() {
  const imageInput = useRef<HTMLInputElement>(null!);
  type UserFormInput = Pick<UserData, "email" | "nickname" | "profileImageUrl">;
  const [formData, setFormData] = useState<UserFormInput>({
    email: "",
    nickname: "",
    profileImageUrl: "",
  });
  const { nicknameError, openNicknameErrorModal }: any = setModals();

  useEffect(() => {
    // 회원 정보를 가져와서 이메일 정보를 설정
    const fetchUserData = async () => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        try {
          const userData = await UserService.getUserData();
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
  const handleFileChange = async (e: React.ChangeEvent) => {
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
        const file = imageInput.current?.files?.[0];
        if (file) {
          const formData = new FormData();
          formData.append("image", file);

          await axios.post("/users/me/image", formData, {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          });
        }
        // 변경된 nickname과 profileImageUrl을 서버로 전송
        // 이 부분에서 자꾸 profileImageUrl 형식이 이상하다고 떠요..
        // FormData로도 해보고 다 해봤는데 ....
        const response = await axios.put(
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

        // 임의로 alert 창 뜨게 수정
        // alert("저장되었습니다.");
      } catch (error) {
        if (isAxiosError(error)) {
          if (error.response?.data === 400) {
            openNicknameErrorModal();
          }
          console.error("Error updating user data:", error);
        }
      }
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.profileLabel}>프로필</div>
      <div className={styles.inputContainer}>
        {formData.profileImageUrl ? (
          <Image
            className={styles.fileAddImg}
            src={formData.profileImageUrl}
            width={182}
            height={182}
            alt="프로필 이미지"
            objectFit="cover"
            onClick={handleClickImageUpload}
          />
        ) : (
          <Image
            className={styles.fileAddImg}
            src="/images/add.svg"
            width={182}
            height={182}
            alt="추가 아이콘"
            onClick={handleClickImageUpload}
          />
        )}
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
      {nicknameError && <NicknameErrorModal />}
    </form>
  );
}

export default ProfileForm;
