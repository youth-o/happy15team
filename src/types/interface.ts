// 회원가입 페이지
export interface UserData {
  email: string;
  nickname: string;
  password: string;
  confirmPassword: string;
}

//로그인 페이지
export interface LoginData {
  email: string;
  password: string;
}
