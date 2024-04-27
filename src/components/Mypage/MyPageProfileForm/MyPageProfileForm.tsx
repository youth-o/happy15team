import styles from "./MyPageProfileForm.module.css";
import { useRef } from "react";
import { useState, useEffect } from "react";
import UserService from "@/api/UserService";
import Image from "next/image";
import { UserData } from "@/types/interface";
import { dataChangeStore } from "@/lib/userStore";
import modalState from "@/lib/modalState";
import ModalBox from "@/components/Modals/ModalBox";

type UserFormInput = Pick<UserData, "email" | "nickname" | "profileImageUrl">;

function ProfileForm() {
  const imageInput = useRef<HTMLInputElement>(null!);
  const [formData, setFormData] = useState<UserFormInput>({
    email: "",
    nickname: "",
    profileImageUrl: "",
  });
  const [previewImage, setPreviewImage] = useState<string | null>("");
  const { dataChange, setDataChange }: any = dataChangeStore();
  const { openModal, setOpenModal } = modalState();

  const fetchUserData = async () => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      try {
        const userData = await UserService.getUserData();
        setFormData(userData);
        setDataChange(false);
        // 사용자 정보를 처리
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
  };

  useEffect(() => {
    fetchUserData();
    console.log(dataChange);
  }, [dataChange]);

  // 파일이 선택되었을 때 호출되는 함수
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const imageUrl = URL.createObjectURL(file);
        setPreviewImage(imageUrl);
        const profileImageUrl = await UserService.uploadProfileImage(file);
        setFormData((prevFormData) => ({
          ...prevFormData,
          profileImageUrl: profileImageUrl, // 이미지 URL 업데이트
        }));
      } catch (error) {
        console.error("Error uploading image:", error);
      }
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

    try {
      await UserService.updateProfile(
        {
          profileImageUrl: formData.profileImageUrl,
          nickname: formData.nickname,
        },
        () => {
          setOpenModal("openChangeProfileModal");
        },
        () => {
          setOpenModal("openNicknameErrorModal");
        }
      );
      setDataChange(true);
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.profileLabel}>프로필</div>
      <div className={styles.inputContainer}>
        {previewImage ? (
          <Image
            className={styles.fileAddImg}
            src={previewImage}
            width={182}
            height={182}
            alt="프로필 이미지"
            objectFit="cover"
            onClick={handleClickImageUpload}
          />
        ) : formData.profileImageUrl ? (
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
    </form>
  );
}

export default ProfileForm;
