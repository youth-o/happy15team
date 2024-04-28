import Image from "next/image";
import styles from "./ViewComment.module.css";
import setModals from "@/lib/zustand";
import { useEffect, useRef, useState } from "react";
import { EditComment, deleteComment, getComment } from "@/api/DashboardData";
import Participants from "@/components/Nav/Participants/Participants";

const ViewComment = () => {
  const {
    confirmCardData,
    commentRender,
    loginUserData,
    setCommentRenderDone,
    setCommentRender,
  } = setModals();
  const [comments, setComments] = useState<any>();
  const [editComment, setEditComment] = useState(false);
  const textRef = useRef(null);
  const fetchComment = async () => {
    const cardId = confirmCardData;
    const token = localStorage.getItem("accessToken");
    if (token) {
      const commentData = await getComment(token, cardId);
      setComments(commentData);
    }
  };

  const handleCommentEdit = async (id) => {
    const token = localStorage.getItem("accessToken");
    const comment = {
      content: textRef.current.value,
    };
    if (token) {
      await EditComment(token, comment, id);
    }
    setEditComment(!editComment);
    commentRender ? setCommentRenderDone() : setCommentRender();
  };

  const handleCommentDelete = async (id) => {
    const response = confirm("해당 댓글을 삭제하시겠습니까?");
    if (!response) return;
    const token = localStorage.getItem("accessToken");

    if (token) {
      await deleteComment(token, id);
    }
    commentRender ? setCommentRenderDone() : setCommentRender();
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
          {!editComment ? (
            <div className={styles.commentBody}>{comment.content}</div>
          ) : (
            <div className={styles.commentBody}>
              <textarea
                className={styles.textarea}
                placeholder={comment.content}
                ref={textRef}
              />
            </div>
          )}
          {editComment && (
            <div className={styles.editTool}>
              <button
                onClick={() => setEditComment(!editComment)}
                className={styles.submit}
              >
                취소
              </button>
              <button
                onClick={() => handleCommentEdit(comment.id)}
                className={styles.submit}
              >
                저장
              </button>
            </div>
          )}
          {comment.author.id === loginUserData.id && (
            <div className={styles.commentFooter}>
              <span onClick={() => setEditComment(!editComment)}>수정</span>
              <span onClick={() => handleCommentDelete(comment.id)}>삭제</span>
            </div>
          )}
        </>
      ))}
    </div>
  );
};
export default ViewComment;
