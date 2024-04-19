import styles from "./SignUpForm.module.css";
import { useMutation } from "react-query";
import { UserData } from "@/types/interface";
import { Resolver, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import * as yup from "yup";
import { useState } from "react";
import { useRouter } from "next/router";
import setModals from "@/lib/zustand";
import UserService from "@/api/UserService";

function SignUpForm() {
  const [passwordType, setPasswordType] = useState({
    type: "password",
    visible: false,
  });
  const [passwordRepType, setPasswordRepType] = useState({
    type: "password",
    visible: false,
  });
  const [agreeTerms, setAgreeTerms] = useState(false);
  const router = useRouter();
  const { openEmailExistedModal, openRegisterSuccessModal }: any = setModals();

  const handlePasswordType = () => {
    setPasswordType(() => {
      if (!passwordType.visible) {
        return { type: "text", visible: true };
      }
      return { type: "password", visible: false };
    });
  };

  const handlePasswordRepType = () => {
    setPasswordRepType(() => {
      if (!passwordRepType.visible) {
        return { type: "text", visible: true };
      }
      return { type: "password", visible: false };
    });
  };

  // react-query useMutation 사용.. 이렇게 간단한 게 맞나?
  const mutation = useMutation(UserService.signUp);

  // react-hook-form, yup 라이브러리를 통해 유효성 검사
  const formSchema = yup.object({
    email: yup
      .string()
      .required("이메일을 입력해 주세요.")
      .email("이메일 형식으로 작성해 주세요."),
    nickname: yup
      .string()
      .required("닉네임을 입력해 주세요.")
      .max(10, "열 자 이하로 작성해 주세요."),
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

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(formSchema) as Resolver<UserData>,
  });

  async function onSubmit(data: UserData) {
    try {
      await mutation.mutateAsync(data);
      openRegisterSuccessModal();
      console.log("회원가입 성공:", data);
      router.push("/signin");
    } catch (error: any) {
      if (error.response && error.response.status === 409) {
        openEmailExistedModal();
      }
      console.error("회원가입 실패:", error);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputContainer}>
        <label htmlFor="email">이메일</label>
        <input
          className={errors.email ? styles.errorFocus : styles.notError}
          type="text"
          placeholder="이메일을 입력해 주세요"
          id="email"
          {...register("email")}
        />
        {errors.email && (
          <div className={styles.error}>{errors.email.message}</div>
        )}
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="nickname">닉네임</label>
        <input
          className={errors.nickname ? styles.errorFocus : styles.notError}
          type="text"
          placeholder="닉네임을 입력해 주세요"
          id="nickname"
          {...register("nickname")}
        />
        {errors.nickname && (
          <div className={styles.error}>{errors.nickname.message}</div>
        )}
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="password">비밀번호</label>
        <div className={styles.pwContainer}>
          <input
            className={errors.password ? styles.errorFocus : styles.notError}
            type={passwordType.type}
            placeholder="8자 이상 입력해 주세요"
            id="password"
            {...register("password")}
          />
          <Image
            className={styles.eye}
            src={
              passwordType.visible
                ? "/images/eye-on.svg"
                : "/images/eye-off.svg"
            }
            width={24}
            height={24}
            onClick={handlePasswordType}
            alt="닫힌눈"
          />
        </div>
        {errors.password && (
          <div className={styles.error}>{errors.password.message}</div>
        )}
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="passwordRep">비밀번호 확인</label>
        <div className={styles.pwContainer}>
          <input
            className={
              errors.confirmPassword ? styles.errorFocus : styles.notError
            }
            type={passwordRepType.type}
            placeholder="비밀번호를 한 번 더 입력해 주세요"
            id="confirmPassword"
            {...register("confirmPassword")}
          />
          <Image
            className={styles.eye}
            src={
              passwordRepType.visible
                ? "/images/eye-on.svg"
                : "/images/eye-off.svg"
            }
            width={24}
            height={24}
            onClick={handlePasswordRepType}
            alt="닫힌눈"
          />
        </div>
        {errors.confirmPassword && (
          <div className={styles.error}>{errors.confirmPassword.message}</div>
        )}
      </div>
      <div className={styles.checkBox}>
        <input
          type="checkbox"
          onChange={(e) => setAgreeTerms(e.target.checked)}
        />
        <p>이용약관에 동의합니다.</p>
      </div>
      <button
        className={styles.loginBtn}
        type="submit"
        disabled={isValid && agreeTerms}
      >
        회원가입
      </button>
    </form>
  );
}

export default SignUpForm;
