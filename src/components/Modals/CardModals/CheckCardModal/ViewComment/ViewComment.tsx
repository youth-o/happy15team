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
  const [thisComment, setThisComment] = useState(0);
  const textRef = useRef(null);
  const fetchComment = async () => {
    const cardId = confirmCardData;
    const token = localStorage.getItem("accessToken");
    if (token) {
      const commentData = await getComment(token, cardId);
      setComments(commentData);
    }
  };

  const formattedDate = (createdAt) => {
    const date = new Date(createdAt);
    return `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(
      2,
      "0"
    )}-${String(date.getUTCDate()).padStart(2, "0")} ${String(
      date.getUTCHours()
    ).padStart(2, "0")}:${String(date.getUTCMinutes()).padStart(2, "0")}`;
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

  const handleEditClick = (index) => {
    setEditComment(!editComment);
    setThisComment(index);
  };

  useEffect(() => {
    fetchComment();
  }, [commentRender]);

  if (!comments) return null;

  return (
    <div className={styles.commentWrapper}>
      {comments?.map((comment, index) => (
        <div key={index}>
          <div className={styles.commentHeader}>
            <Participants user={comment.author} />
            <h2>{comment.author?.nickname}</h2>
            <p>{formattedDate(comment.createdAt)}</p>
          </div>
          <div className={styles.commentBody}>
            <p
              className={
                editComment && thisComment === index
                  ? styles.noEdit
                  : styles.Edit
              }
            >
              {comment.content}
            </p>
            <textarea
              className={
                editComment && thisComment === index
                  ? styles.textarea
                  : styles.noEdit
              }
              placeholder={comment.content}
              ref={textRef}
            />
          </div>

          {comment.author.id === loginUserData.id && (
            <div className={styles.commentFooter}>
              <span onClick={() => setEditComment(!editComment)}>수정</span>
              <span onClick={() => handleCommentDelete(comment.id)}>삭제</span>
            </div>
          )}
          {editComment && (
            <div className={styles.editTool}>
              <button
                onClick={() => handleEditClick(index)}
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
        </div>
      ))}
    </div>
  );
};
export default ViewComment;
