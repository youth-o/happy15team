import { useState } from "react";
import { Resolver, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "react-query";
import * as yup from "yup";
import postSignIn from "@/api/postSignIn";
import styles from "./SignInForm.module.css";
import Image from "next/image";
import { LoginData, UserData } from "@/types/interface";

import { useRouter } from "next/router";
import setModal from "@/lib/zustand";

const formSchema = yup.object({
  email: yup
    .string()
    .required("이메일을 입력해 주세요.")
    .email("이메일 형식으로 작성해 주세요."),
  password: yup
    .string()
    .required("8자 이상 입력해 주세요.")
    .min(8, "8자 이상 입력해 주세요.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/,
      "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요."
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "비밀번호가 일치하지 않습니다."),
});

function SignInForm() {
  const [seePassword, setSeePassword] = useState<boolean>(false);
  const router = useRouter();
  const { openPasswordMismatchModal, openNonExistedUserModal }: any =
    setModal(); // zustand 스토어에서 함수 불러오기
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSeePassword = () => {
    setSeePassword(!seePassword);
  };

  const mutation = useMutation(postSignIn);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    mode: "onBlur",
    resolver: yupResolver(formSchema),
  });

  async function onSubmit(data: LoginData) {
    try {
      await mutation.mutateAsync(data);
      console.log("로그인 성공", data);
      router.push("/mydashboard");
    } catch (error: any) {
      if (error.response && error.response.status === 404) {
        setErrorMessage("존재하지 않는 회원입니다.");
        openNonExistedUserModal(); // 존재하지 않는 회원 모달 띄우기
      } else if (error.response && error.response.status === 400) {
        setErrorMessage("비밀번호가 일치하지 않습니다.");
        openPasswordMismatchModal(); // 비밀번호 불일치 모달 띄우기
      } else {
        console.error("로그인 실패", error);
      }
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputContainer}>
        <label htmlFor="email">이메일</label>
        <input
          id="email"
          type="email"
          placeholder="이메일을 입력해 주세요"
          {...register("email")}
          className={errors.email ? styles.errorFocus : styles.notError}
        />
        {errors.email && (
          <div className={styles.error}>{errors.email.message}</div>
        )}
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="password">비밀번호</label>
        <div className={styles.pwContainer}>
          <input
            id="password"
            type={seePassword ? "text" : "password"}
            placeholder="비밀번호를 입력해 주세요"
            {...register("password")}
            className={errors.password ? styles.errorFocus : styles.notError}
          />
          {!seePassword ? (
            <Image
              src="/images/eye-on.svg"
              width={24}
              height={24}
              alt="열린눈"
              className={styles.eye}
              onClick={handleSeePassword}
            />
          ) : (
            <Image
              src="/images/eye-off.svg"
              width={24}
              height={24}
              alt="닫힌눈"
              className={styles.eye}
              onClick={handleSeePassword}
            />
          )}
        </div>
        {errors.password && (
          <div className={styles.error}>{errors.password.message}</div>
        )}
      </div>
      <div className={styles.errorMessage}>
        {errorMessage && <div className={styles.error}>{errorMessage}</div>}
      </div>
      <button className={styles.loginBtn} type="submit">
        로그인
      </button>
    </form>
  );
}

export default SignInForm;
