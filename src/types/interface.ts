// 회원가입 페이지
export interface UserData {
  email: string;
  nickname: string;
  password: string;
  confirmPassword: string;
}

//사이드바
export interface Item {
  title: string;
  color: string;
  createdByMe: boolean;
}