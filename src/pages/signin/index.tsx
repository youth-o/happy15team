import SignInForm from "@/components/SignInForm/SignInForm";
import Link from "next/link";
import SignInHeader from "@/components/SignInHeader/SignInHeader";
import styles from "@/pages/signin/SignIn.module.css";
import modalState from "@/lib/modalState";
import ModalBox from "@/components/Modals/ModalBox";

function SignIn() {
  const { openModal } = modalState();

  return (
    <div className={styles.body}>
      <SignInHeader />
      <SignInForm />
      <div className={styles.noMember}>
        <p>회원이 아니신가요?</p>
        <Link href="/signup" className={styles.link}>
          회원가입 하기
        </Link>
      </div>
      {openModal && <ModalBox />}
    </div>
  );
}

export default SignIn;
