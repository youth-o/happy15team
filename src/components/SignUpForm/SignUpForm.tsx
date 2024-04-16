import axios from "@/lib/axios";
import styles from "./SignUpForm.module.css";
// import { useMutation } from "react-query";
// import { AxiosError } from "axios";
import { UserData } from "@/types/interface";
import { Resolver, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function SignUpForm() {
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
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(formSchema) as Resolver<UserData, any>,
  });

  // const signUpMutation = useMutation<void, AxiosError>(
  //   () => axios.post("/users", inputData),
  //   {
  //     onSuccess: () => {
  //       // 회원가입 성공
  //       console.log("회원가입 성공!");
  //     },
  //     onError: (error) => {
  //       // 회원가입 실패
  //       console.error("회원가입 실패:", error);
  //     },
  //   }
  // );

  async function onSubmit(data: UserData) {
    try {
      // signUpMutation.mutate({ data: inputData });
      await axios.post("/users", data);
      console.log("회원가입 성공:", data);
    } catch (error) {
      console.error("회원가입 실패:", error);
    }
    // 로그인 구현됐을 때 주석 풀 예정
    // await axios.post("/auth/login", {
    //   email,
    //   password,
    // });
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
        <input
          className={errors.password ? styles.errorFocus : styles.notError}
          type="password"
          placeholder="8자 이상 입력해 주세요"
          id="password"
          {...register("password")}
        />
        {errors.password && (
          <div className={styles.error}>{errors.password.message}</div>
        )}
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="passwordRep">비밀번호 확인</label>
        <input
          className={
            errors.confirmPassword ? styles.errorFocus : styles.notError
          }
          type="password"
          placeholder="비밀번호를 한 번 더 입력해 주세요"
          id="confirmPassword"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <div className={styles.error}>{errors.confirmPassword.message}</div>
        )}
      </div>
      <div className={styles.checkBox}>
        <input type="checkbox" />
        <p>이용약관에 동의합니다.</p>
      </div>
      <button className={styles.loginBtn} type="submit">
        회원가입
      </button>
    </form>
  );
}

export default SignUpForm;
