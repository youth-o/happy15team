import dashboard from "@/pages/dashboard/[id]";
import { create } from "zustand";

//Todo
//모달 이름 case화 해서 페이지 최상단에 코드 한줄로 적용시키기

const setModals = create((set) => ({
  modalState: false,
  passwordMismatch: false, //비밀번호 다른 모달 상태
  emailExisted: false, // 이메일 중복 모달 상태
  openModal: () => set({ modalState: true }),
  closeModal: () => set({ modalState: false }),
  editCardModal: false,
  samePassword: false, // 현재 비밀번호와 새 비밀번호 중복
  changePassword: false, // 비밀번호 변경 성공
  dashboardData: {
    id: "",
    title: "",
    userId: "",
    createdByMe: false,
  },
  loginUserData: { id: "", email: "", nickname: "", profileImageUrl: "" },

  dashboardMembers: [
    {
      userId: "",
    },
  ],

  openedModalId: "",
  confirmCardData: [],

  setConfirmCardData: (data: any) => set({ confirmCardData: data }),
  setOpenedModalId: (data: any) => set({ openedModalId: data }),
  setDashboardMembers: (data: any) => set({ dashboardMembers: data }),
  setLoginUserData: (data: any) => set({ loginUserData: data }),
  setDashboardData: (data: any) => set({ dashboardData: data }),
  openEditCardModal: () => set({ editCardModal: true }),
  closeEditCardModal: () => set({ editCardModal: false }),
  openSamePasswordErrorModal: () => set({ samePassword: true }),
  closeSamePasswordErrorModal: () => set({ samePassword: false }),
  openSuccessChangePasswordModal: () => set({ changePassword: true }),
  closeSuccessChangePasswordModal: () => set({ changePassword: false }),
  openPasswordMismatchModal: () => set({ modalState: true }),
  closePasswordMismatchModal: () => set({ modalState: false }),
}));

export default setModals;
