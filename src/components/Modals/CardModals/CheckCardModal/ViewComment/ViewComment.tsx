import Image from "next/image";
import styles from "./ViewComment.module.css";
import setModals from "@/lib/zustand";
import { useEffect, useState } from "react";
import { getComment } from "@/api/DashboardData";
import Participants from "@/components/Nav/Participants/Participants";

const ViewComment = () => {
  const { confirmCardData, commentRender, loginUserData } = setModals();
  const [comments, setComments] = useState<any>();
  const fetchComment = async () => {
    const cardId = confirmCardData;
    const token = localStorage.getItem("accessToken");
    if (token) {
      const commentData = await getComment(token, cardId);
      setComments(commentData);
    }
  };

  useEffect(() => {
    fetchComment();
  }, [commentRender]);

  if (!comments) return null;

  return (
    <div className={styles.commentWrapper}>
      {comments?.map((comment, index) => (
        <>
          <div key={index} className={styles.commentHeader}>
            <Participants user={comment.author} />
            <h2>{comment.author?.nickname}</h2>
            <p>{comment.createdAt}</p>
          </div>
          <div className={styles.commentBody}>{comment.content}</div>
          {comment.author.id === loginUserData.id && (
            <div className={styles.commentFooter}>
              <span>수정</span>
              <span>삭제</span>
            </div>
          )}
        </>
      ))}
    </div>
  );
};
export default ViewComment;
