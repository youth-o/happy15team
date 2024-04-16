import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import styles from "./SignInForm.module.css";
import Image from "next/image";
import { LoginData } from "@/types/interface";

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
});

function SignInForm() {
  const [seePassword, setSeePassword] = useState<boolean>(false);

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

  const onSubmit = async (data: LoginData) => {
    try {
      await axios.post("/users", data);
      console.log("회원가입 성공:", data);
    } catch (error) {
      console.error("회원가입 실패:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="email" className={styles.emailText}>
          이메일
        </label>
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
      <div>
        <label htmlFor="password" className={styles.passwordText}>
          비밀번호
          <button
            type="button"
            className="eyeButton"
            onClick={seePasswordHandler}
          >
            {!seePassword ? (
              <Image
                src="/images/eyeOn.svg"
                width={15}
                height={15}
                alt="eyeOn"
              />
            ) : (
              <Image
                src="/images/eyeOff.svg"
                width={15}
                height={15}
                alt="eyeOff"
              />
            )}
          </button>
        </label>
        <input
          id="password"
          type={seePassword ? "text" : "password"}
          placeholder="비밀번호를 입력해 주세요"
          {...register("password")}
          className={errors.password ? styles.errorFocus : styles.notError}
        />
        {errors.password && (
          <div className={styles.error}>{errors.password.message}</div>
        )}
      </div>
      <button type="submit">로그인</button>
    </form>
  );
}

export default SignInForm;
