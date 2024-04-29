import { useRef, useState } from "react";
import styles from "./AddComment.module.css";
import setModals from "@/lib/zustand";
import { getComment, postComment } from "@/api/DashboardData";
import { useRouter } from "next/router";

const AddComment = () => {
  const commentRef = useRef<any>(null);
  const {
    openedModalId,
    confirmCardData,
    setCommentRender,
    setCommentRenderDone,
    commentRender,
  }: any = setModals();
  const router = useRouter();
  const { id }: any = router.query;
  const handlePostComment = async () => {
    if (commentRef.current.value.length < 1) {
      alert("댓글을 작성해주세요.");
      return;
    }
    const token = localStorage.getItem("accessToken");
    const formData = {
      content: commentRef.current.value,
      cardId: confirmCardData,
      columnId: openedModalId.id,
      dashboardId: Number(id),
    };
    if (token) {
      await postComment(token, formData);
      commentRef.current.value = "";
    }
    commentRender ? setCommentRenderDone() : setCommentRender();
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.inputHeader}>
        <label>댓글</label>
        <button onClick={handlePostComment} className={styles.submit}>
          입력
        </button>
      </div>
      <div className={styles.commentInput}>
        <textarea
          ref={commentRef}
          className={styles.textarea}
          placeholder="댓글 작성하기"
        />
      </div>
    </div>
  );
};

export default AddComment;
