import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "react-query";
import * as yup from "yup";
import { AxiosError } from "axios";
import styles from "./SignInForm.module.css";
import Image from "next/image";
import { LoginData } from "@/types/interface";
import postSignIn from "@/api/postSignIn";
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
  const [initialDataLoaded, setInitialDataLoaded] = useState(false);
  const router = useRouter();
  const { openPasswordMismatchModal, openNonExistedUserModal }: any =
    setModal(); // zustand 스토어에서 함수 불러오기
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const seePasswordHandler = () => {
    setSeePassword(!seePassword);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    mode: "onBlur",
    resolver: yupResolver(formSchema),
  });

  const { mutate } = useMutation({
    mutationFn: postSignIn,
    onSuccess: (data) => {
      // 로그인 성공 시 로컬 스토리지에 토큰 저장
      localStorage.setItem("accessToken", data.accessToken);
      // /mydashboard로 이동
      router.push("/mydashboard");
    },
    onError: (error: unknown) => {
      console.error("로그인 실패:", error);

      // error가 AxiosError인지 체크
      if (error instanceof AxiosError) {
        // AxiosError인 경우, 에러 응답을 확인
        if (error.response && error.response.data) {
          const errorMessage = error.response.data.message;

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
    },
  });

  // 폼 제출 함수
  const onSubmit = (data: LoginData) => {
    mutate(data);
  };

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
          <div className={styles.passwordContainer}>
            <input
              id="password"
              type={seePassword ? "text" : "password"}
              placeholder="비밀번호를 입력해 주세요"
              {...register("password")}
              className={errors.password ? styles.errorFocus : styles.notError}
            />
            <button
              type="button"
              className={styles.eye}
              onClick={seePasswordHandler}
            >
              {!seePassword ? (
                <Image
                  src="/images/eye-on.svg"
                  width={15}
                  height={15}
                  alt="eyeOn"
                />
              ) : (
                <Image
                  src="/images/eye-off.svg"
                  width={15}
                  height={15}
                  alt="eyeOff"
                />
              )}
            </button>
          </div>
          {errors.password && (
            <div className={styles.error}>{errors.password.message}</div>
          )}
        </div>
        <div className={styles.errorMessage}>
          {errorMessage && <div className={styles.error}>{errorMessage}</div>}
        </div>
        <button type="submit" className={styles.loginBtn}>
          로그인
        </button>
      </form>
    );
  }

  return <MyDashboard />;
}

export default SignInForm;
