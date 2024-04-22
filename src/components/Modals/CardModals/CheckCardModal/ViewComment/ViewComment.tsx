import Image from "next/image";
import styles from "./ViewComment.module.css";

const ViewComment = () => {
  return (
    <div className={styles.commentWrapper}>
      <div className={styles.commentHeader}>
        <Image
          src="images/profileImageTest.svg"
          width={30}
          height={30}
          alt="유저프로필"
        />
        <h2>박우혁</h2>
        <p>2024.04.20 14:00</p>
      </div>
      <div className={styles.commentBody}>
        commentcommentcommentcommentcomment comment comment comment comment
      </div>
      <div className={styles.commentFooter}>
        <span>수정</span>
        <span>삭제</span>
      </div>
      <hr />
    </div>
  );
};

export default ViewComment;
