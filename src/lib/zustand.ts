import { create } from "zustand";

//Todo
//모달 이름 case화 해서 페이지 최상단에 코드 한줄로 적용시키기
export interface IsetModals {
  modalState: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const setModals = create((set) => ({
  modalState: false,
  passwordMismatch: false, //비밀번호 다른 모달 상태

  emailExisted: false, // 이메일 중복 모달 상태
  registerSuccess: false, // 회원가입 성공 모달 상태
  nicknameError: false, // 닉네임 10자 이상 에러
  samePassword: false, // 현재 비밀번호와 새 비밀번호 중복
  changePassword: false, // 비밀번호 변경 성공
  openModal: () => set({ modalState: true }),
  closeModal: () => set({ modalState: false }),
  openPasswordMismatchModal: () => set({ modalState: true }),
  closePasswordMismatchModal: () => set({ modalState: false }),
  openEmailExistedModal: () => set({ emailExisted: true }),
  closeEmailExistedModal: () => set({ emailExisted: false }),
  openRegisterSuccessModal: () => set({ registerSuccess: true }),
  closeRegisterSuccessModal: () => set({ registerSuccess: false }),
  openNicknameErrorModal: () => set({ nicknameError: true }),
  closeNicknameErrorModal: () => set({ nicknameError: false }),
  openSamePasswordErrorModal: () => set({ samePassword: true }),
  closeSamePasswordErrorModal: () => set({ samePassword: false }),
  openSuccessChangePasswordModal: () => set({ changePassword: true }),
  closeSuccessChangePasswordModal: () => set({ changePassword: false }),
}));

export default setModals;
