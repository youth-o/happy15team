import styles from "./MyPagePasswordForm.module.css";

function PasswordForm() {
  return (
    <form className={styles.form}>
      <div className={styles.profileLabel}>비밀번호 변경</div>
      <div className={styles.inputContainer}>
        <div className={styles.editContainer}>
          <label htmlFor="nowPassword">현재 비밀번호</label>
          <input
            type="text"
            id="nowPassword"
            placeholder="현재 비밀번호 입력"
          />
        </div>
        <div className={styles.editContainer}>
          <label htmlFor="newPassword">새 비밀번호</label>
          <input type="text" id="newPassword" placeholder="새 비밀번호 입력" />
        </div>
        <div className={styles.editContainer}>
          <label htmlFor="newPasswordConfirm">새 비밀번호 확인</label>
          <input
            type="text"
            id="newPasswordConfirm"
            placeholder="새 비밀번호 입력"
          />
        </div>
      </div>
      <button className={styles.formBtn}>변경</button>
    </form>
  );
}

export default PasswordForm;
