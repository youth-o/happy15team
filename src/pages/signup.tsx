import SignUpForm from "@/components/SignUpForm/SignUpForm";
import SignUpHeader from "@/components/SignUpHeader/SignUpHeader";
import styles from "@/components/SignUpForm/SignUpForm.module.css";
import Link from "next/link";
import setModals from "@/lib/zustand";
import EmailExisted from "@/components/Modals/SignUpModal/EmailExisted";

function SignUp() {
  const { modalState }: any = setModals();

  return (
    <div className={styles.body}>
      <SignUpHeader />
      <SignUpForm />
      <div className={styles.alreadyRegistered}>
        <p>이미 가입하셨나요?</p>
        <Link className={styles.link} href="/signin">
          로그인하기
        </Link>
      </div>
      {modalState && <EmailExisted />}
    </div>
  );
}

export default SignUp;
