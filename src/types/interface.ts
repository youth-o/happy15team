// 회원가입 페이지
export interface UserData {
  email: string;
  nickname: string;
  password: string;
  confirmPassword: string;
  profileImageUrl?: string;
}

//로그인 페이지
export interface LoginData {
  email: string;
  password: string;
}

//대시보드
export interface Dashboard {
  id: number;
  title: string;
  color: string;
  userId: number;
  createdAt: string;
  updatedAt: string;
  createdByMe: boolean;
}

//대시보드 페이지
export interface DashboardMember {
  id: number;
  email: string;
  nickname: string;
  profileImageUrl: string | null;
  createdAt: string;
  updatedAt: string;
  isOwner: boolean;
  userId: number;
}

//대시보드 페이지
export interface DashboardMembers {
  members: DashboardMember[];
  totalCount: number;
}
