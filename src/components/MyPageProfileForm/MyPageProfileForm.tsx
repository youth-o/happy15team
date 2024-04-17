import styles from "./MyPageProfileForm.module.css";

function ProfileForm() {
  return (
    <form className={styles.form}>
      <div className={styles.profileLabel}>프로필</div>
      <div className={styles.inputContainer}>
        <button>
          <input type="file" />
        </button>
        <div className={styles.profileContainer}>
          <div className={styles.editContainer}>
            <label htmlFor="email">이메일</label>
            <input type="text" id="email" />
          </div>
          <div className={styles.editContainer}>
            <label htmlFor="nickname">닉네임</label>
            <input type="text" id="nickname" />
          </div>
        </div>
      </div>
    </form>
  );
}

export default ProfileForm;
