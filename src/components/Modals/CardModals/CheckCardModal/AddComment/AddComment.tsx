import styles from "./AddComment.module.css";

const AddComment = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inputHeader}>
        <label>댓글</label>
        <button className={styles.submit}>입력</button>
      </div>
      <div className={styles.commentInput}>
        <textarea className={styles.textarea} placeholder="댓글 작성하기" />
      </div>
    </div>
  );
};

export default AddComment;
