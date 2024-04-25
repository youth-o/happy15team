import setModals from "@/lib/zustand";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./CreateDashboardModal.module.css";
import { PostCreateDashboardData } from "@/api/PostCreateDashboardData";
import useStore from "@/lib/zustand2";
import { useRouter } from 'next/router';

const colorList = ["#7ac555", "#5534da", "#ffa500", "#76a5ea", "#e876ea"];

const CreateDashboardModal = () => {
  const router = useRouter();
  const { setDataChange } = useStore();
  const { closeCreateDashboardModal }: any = setModals();
  const [clickedIndex, setClickedIndex] = useState<number>(0);
  const [dashboardTitle, setDashboardTitle] = useState<string>("");

  let createDashboardData = {
    title: "",
    color: "",
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDashboardTitle(e.target.value);
  };

  const handleClick = (index: number) => {
    setClickedIndex(index);
  };

  const handleCreateDashboard = () => {
    createDashboardData = {
      title: dashboardTitle,
      color: colorList[clickedIndex],
    };

    fetchData();
  };

  const fetchData = async () => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      try {
        const data = await PostCreateDashboardData(token, createDashboardData);
        setDataChange(data.data.id);
        closeCreateDashboardModal();
        router.push(`/dashboard/${data.data.id}`);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error("토큰 없음");
    }
  };

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const handleClickModalOutside = () => {
    closeCreateDashboardModal();
  };

  return (
    <div className={styles.modalOverlay} onClick={handleClickModalOutside}>
      <div className={styles.modal} onClick={handleModalClick}>
        <form>
          <div className={styles.title}>새로운 대시보드</div>
          <div className={styles.naming}>대시보드 이름</div>
          <input
            placeholder="뉴프로젝트"
            value={dashboardTitle}
            onChange={handleTitleChange}
          ></input>
          <div className={styles.circleContainer}>
            {colorList.map((color, index) => (
              <div
                key={index}
                className={styles.circle}
                style={{ backgroundColor: color }}
                onClick={() => handleClick(index)}
              >
                {clickedIndex === index ? (
                  <Image
                    src="/images/checkIcon.svg"
                    alt="Check Icon"
                    width={24}
                    height={24}
                  />
                ) : null}
              </div>
            ))}
          </div>
          <div className={styles.buttonContainer}>
            <button onClick={handleClickModalOutside}>취소</button>
            <button onClick={handleCreateDashboard} type="button">
              생성
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateDashboardModal;
