// 회원가입 페이지
export interface UserData {
  id: string;
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

//대시보드 초대내역
export interface DashboardInvitation {
  id: number;
  inviter: {
    nickname: string;
    email: string;
    id: number;
  };
  teamId: string;
  dashboard: {
    title: string;
    id: number;
  };
  invitee: {
    nickname: string;
    email: string;
    id: number;
  };
  inviteAccepted: boolean;
  createdAt: string;
  updatedAt: string;
}

//초대 내역 페이지네이션
export interface DashboardInvitations {
  totalCount: number;
  invitations: DashboardInvitation[];
}
