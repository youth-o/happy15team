import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useMutation } from "react-query";
import styles from "./SignUpForm.module.css";

interface SignUpFormData {
  email: string;
  nickname: string;
  password: string;
  confirmPassowrd: string;
}

function SignUpForm() {
  const [formData, setFormData] = useState<SignUpFormData>({
    email: "",
    nickname: "",
    password: "",
    confirmPassowrd: "",
  });

  const signUpMutation = useMutation<void, AxiosError, SignUpFormData>(
    (formData) => axios.post("/users", formData),
    {
      onSuccess: (data) => {
        // 회원가입 성공 시 데이터 처리
        // 예를 들어, 받아온 데이터를 justand에 설정
        // setJustandData(data);
      },
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signUpMutation.mutate(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <label htmlFor="email">이메일</label>
        <input
          type="text"
          placeholder="이메일을 입력해 주세요"
          value={formData.email}
          id="email"
          onChange={handleChange}
        />
        <div className={styles.error}></div>
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="nickname">닉네임</label>
        <input
          type="text"
          placeholder="닉네임을 입력해 주세요"
          value={formData.nickname}
          id="nickname"
          onChange={handleChange}
        />
        <div className={styles.error}></div>
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          placeholder="8자 이상 입력해 주세요"
          value={formData.password}
          id="password"
          onChange={handleChange}
        />
        <div className={styles.error}></div>
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="passwordRep">비밀번호 확인</label>
        <input
          type="password"
          placeholder="비밀번호를 한 번 더 입력해 주세요"
          value={formData.confirmPassowrd}
          id="confirmPassword"
          onChange={handleChange}
        />
        <div className={styles.error}></div>
      </div>
      <button className={styles.loginBtn} type="submit">
        회원가입
      </button>
    </form>
  );
}

export default SignUpForm;
