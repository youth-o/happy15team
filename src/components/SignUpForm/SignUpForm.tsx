import { AxiosError } from "axios";
import axios from "@/lib/axios";
import { useMutation } from "react-query";
import styles from "./SignUpForm.module.css";
import useUserStore from "@/hooks/useUserStore";
import { UserData } from "@/types/interface";
import { useState } from "react";

function SignUpForm() {
  const { setUserData } = useUserStore();
  const [inputData, setInputData] = useState<UserData>({
    email: "",
    nickname: "",
    password: "",
    confirmPassword: "",
  });

  const signUpMutation = useMutation<void, AxiosError>(
    () => axios.post("/users", inputData),
    {
      onSuccess: () => {
        // 회원가입 성공
        console.log("회원가입 성공!");
      },
    }
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setInputData((prevInputData) => ({ ...inputData, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUserData(inputData);
    signUpMutation.mutate();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <label htmlFor="email">이메일</label>
        <input
          type="text"
          placeholder="이메일을 입력해 주세요"
          value={inputData.email}
          id="email"
          onChange={handleInputChange}
        />
        <div className={styles.error}></div>
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="nickname">닉네임</label>
        <input
          type="text"
          placeholder="닉네임을 입력해 주세요"
          value={inputData.nickname}
          id="nickname"
          onChange={handleInputChange}
        />
        <div className={styles.error}></div>
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          placeholder="8자 이상 입력해 주세요"
          value={inputData.password}
          id="password"
          onChange={handleInputChange}
        />
        <div className={styles.error}></div>
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="passwordRep">비밀번호 확인</label>
        <input
          type="password"
          placeholder="비밀번호를 한 번 더 입력해 주세요"
          value={inputData.confirmPassword}
          id="confirmPassword"
          onChange={handleInputChange}
        />
        <div className={styles.error}></div>
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
