import SignUpForm from "@/components/Signup/SignUpForm/SignUpForm";
import SignUpHeader from "@/components/Signup/SignUpHeader/SignUpHeader";
import styles from "@/components/Signup/SignUpForm/SignUpForm.module.css";
import Link from "next/link";
import setModals from "@/lib/zustand";
import EmailExistedModal from "@/components/Modals/EmailExistedModal/EmailExistedModal";
import RegisterSuccessModal from "@/components/Modals/RegisterSuccessModal/RegisterSuccessModal";
import SignLayout from "@/components/SignLayout/SignLayout";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function SignUp() {
  const { emailExisted, registerSuccess }: any = setModals();
  const router = useRouter();
  const [initialDataLoaded, setInitialDataLoaded] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      router.push("/mydashboard");
    } else {
      setInitialDataLoaded(true);
    }
  }, [router]);

  if (!initialDataLoaded) {
    return null;
  }

  if (!localStorage.getItem("accessToken")) {
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
        {registerSuccess && <RegisterSuccessModal />}
        {emailExisted && <EmailExistedModal />}
      </SignLayout>
    );
  }

  return <MyDashboard />;
}

export default SignUp;
