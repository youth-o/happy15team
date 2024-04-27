import React, { useState, FormEvent } from "react";
import Image from "next/image";
import styles from "./CreateDashboardModal.module.css";
import { PostCreateDashboardData } from "@/api/PostCreateDashboardData";
import useStore from "@/lib/zustand2";
import { useRouter } from "next/router";
import modalState from "@/lib/modalState";

const colorList = ["#7ac555", "#5534da", "#ffa500", "#76a5ea", "#e876ea"];

const CreateDashboardModal = () => {
  const router = useRouter();
  const { setDataChange } = useStore();
  const { setOpenModal } = modalState();
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

  const handleCreateDashboard = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
        setOpenModal("");
        router.push(`/dashboard/${data.data.id}`);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error("토큰 없음");
    }
  };

  const handleCloseModal = () => {
    setOpenModal("");
  };

  return (
    <>
      <form onSubmit={handleCreateDashboard}>
        <div className={styles.title}>새로운 대시보드</div>
        <div className={styles.naming}>대시보드 이름</div>
        <input
          className={styles.input}
          placeholder="뉴프로젝트"
          value={dashboardTitle}
          onChange={handleTitleChange}
          maxLength={10}
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
          <button onClick={handleCloseModal} type="button">
            취소
          </button>
          <button type="submit">생성</button>
        </div>
      </form>
    </>
  );
};

export default CreateDashboardModal;
