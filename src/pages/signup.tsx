import SignUpForm from "@/components/Signup/SignUpForm/SignUpForm";
import SignUpHeader from "@/components/Signup/SignUpHeader/SignUpHeader";
import styles from "@/components/Signup/SignUpForm/SignUpForm.module.css";
import Link from "next/link";
import SignLayout from "@/components/SignLayout/SignLayout";
import modalState from "@/lib/modalState";
import ModalBox from "@/components/Modals/ModalBox";

function SignUp() {
  const { openModal } = modalState();

  return (
    <SignLayout>
      <SignUpHeader />
      <SignUpForm />
      <div className={styles.alreadyRegistered}>
        <p>이미 가입하셨나요?</p>
        <Link className={styles.link} href="/signin">
          로그인하기
        </Link>
      </div>
      {openModal && <ModalBox />}
    </SignLayout>
  );
}

export default SignUp;
