import SignUpForm from "@/components/Signup/SignUpForm/SignUpForm";
import SignUpHeader from "@/components/Signup/SignUpHeader/SignUpHeader";
import styles from "@/components/Signup/SignUpForm/SignUpForm.module.css";
import Link from "next/link";
import SignLayout from "@/components/SignLayout/SignLayout";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import setModals from "@/lib/zustand";
import modalState from "@/lib/modalState";
import MyDashboard from "./mydashboard";
import ModalBox from "@/components/Modals/ModalBox";

function SignUp() {
  const { emailExisted, registerSuccess }: any = setModals();
  const router = useRouter();
  const [initialDataLoaded, setInitialDataLoaded] = useState(false);
  const { openModal } = modalState();

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
        {openModal && <ModalBox />}
      </SignLayout>
    );
  }

  return <MyDashboard />;
}

export default SignUp;
