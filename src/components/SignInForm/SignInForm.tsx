import { useState } from "react";
import eyeOn from "../../../public/images/eyeOn.svg";
import eyeOff from "../../../public/images/eyeOff.svg";

export default function SignIn() {
  const [showEmailError, setShowEmailError] = useState<string | null>(null); //이메일 입력 에러 처리
  const [showPasswordError, setShowPasswordError] = useState<string | null>(
    null
  ); //비밀번호 입력 에러 처리
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false); //비밀번호 eye버튼 상태

  const emailError = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.validity.typeMismatch) {
      setShowEmailError("이메일 형식으로 작성해 주세요.");
      return;
    }
    setShowEmailError("");
  };

  const passwordError = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.validity.tooShort) {
      setShowPasswordError("8자 이상 작성해 주세요.");
      return;
    }
    setShowPasswordError("");
  };

  const handleEyeButton = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <label htmlFor="email" className="emailText">
        이메일
      </label>
      <input
        id="email"
        type="email"
        className="emailInput"
        //추후에 이메일 입력 에러 텍스트 클래스 추가 필요
        onBlur={emailError}
        placeholder="이메일을 입력해 주세요"
        onChange={(e) => setEmail(e.target.value)}
      />
      {showEmailError && <div className="emailErrorText">{showEmailError}</div>}
      <label htmlFor="password" className="passwordText">
        비밀번호
        <button type="button" className="eyeButton" onClick={handleEyeButton}>
          {!showPassword ? (
            <img src={eyeOn} alt="eyeOn" />
          ) : (
            <img src={eyeOff} alt="eyeOff" />
          )}
        </button>
      </label>
      <input
        id="password"
        type={showPassword ? "text" : "password"}
        className="passwordInput"
        //추후에 비밀번호 입력 에러 텍스트 클래스 추가 필요
        onBlur={passwordError}
        minLength={8}
        placeholder="비밀번호를 입력해 주세요."
        onChange={(e) => setPassword(e.target.value)}
      />
      {showPasswordError && (
        <div className="passwordErrorText">{showPasswordError}</div>
      )}
      <button>로그인</button>
    </div>
  );
}
