import axios, { AxiosError } from "axios";
import { useMutation } from "react-query";
import styles from "./SignUpForm.module.css";
import useUserStore, { UserData } from "@/hooks/useUserStore";

function SignUpForm() {
  const userData = useUserStore((state) => state.userData);
  const setUserData: (data: UserData) => void = useUserStore(
    (state) => state.setUserData
  );

  const signUpMutation = useMutation<void, AxiosError>(
    () => axios.post("/users", userData),
    {
      onSuccess: () => {
        // 회원가입 성공
        console.log("회원가입 성공!");
      },
    }
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData(
      (prevUserData: UserData) =>
        ({
          ...prevUserData,
          [name]: value,
        } as UserData)
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signUpMutation.mutate();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <label htmlFor="email">이메일</label>
        <input
          type="text"
          placeholder="이메일을 입력해 주세요"
          value={userData.email}
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
          value={userData.nickname}
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
          value={userData.password}
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
          value={userData.confirmPassowrd}
          id="confirmPassword"
          onChange={handleInputChange}
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
