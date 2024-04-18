import SignUpForm from "@/components/SignUpForm/SignUpForm";
import SignUpHeader from "@/components/SignUpHeader/SignUpHeader";
import styles from "@/components/SignUpForm/SignUpForm.module.css";
import Link from "next/link";
import setModals from "@/lib/zustand";
import EmailExistedModal from "@/components/Modals/EmailExistedModal/EmailExistedModal";
import RegisterSuccessModal from "@/components/Modals/RegisterSuccessModal/RegisterSuccessModal";

function SignUp() {
  const { emailExisted, registerSuccess }: any = setModals();

  return (
    // TODO
    // body div 없애고 Layout 컴포넌트 만들어서 style 적용 (signin 페이지도!)
    <div className={styles.body}>
      <SignUpHeader />
      <SignUpForm />
      <div className={styles.alreadyRegistered}>
        <p>이미 가입하셨나요?</p>
        <Link className={styles.link} href="/signin">
          로그인하기
        </Link>
      </div>
      {registerSuccess && <RegisterSuccessModal />}
      {emailExisted && <EmailExistedModal />}
    </div>
  );
}

export default SignUp;
