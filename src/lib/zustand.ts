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
  addColumnModal: false,
  createCardModal: false,
  editCardModal: false,
  checkCardModal: false,
   editColumnModal: false,
  


  openEditColumnModal: () => set({ editColumnModal: true }),
  closeEditColumnModal: () => set({ editColumnModal: false }),
  openCheckCardModal: () => set({ checkCardModal: true }),
  closeCheckCardModal: () => set({ checkCardModal: false }),
  openEditCardModal: () => set({ editCardModal: true }),
  closeEditCardModal: () => set({ editCardModal: false }),
  openCreateCardModal: () => set({ createCardModal: true }),
  closeCreateCardModal: () => set({ createCardModal: false }),
  openAddColumnModal: () => set({ addColumnModal: true }),
  closeAddColumnModal: () => set({ addColumnModal: false }),
  openModal: () => set({ modalState: true }),
  closeModal: () => set({ modalState: false }),
  openPasswordMismatchModal: () => set({ modalState: true }),
  closePasswordMismatchModal: () => set({ modalState: false }),
  openEmailExistedModal: () => set({ emailExisted: true }),
  closeEmailExistedModal: () => set({ emailExisted: false }),
  openRegisterSuccessModal: () => set({ registerSuccess: true }),
  closeRegisterSuccessModal: () => set({ registerSuccess: false }),
}));

export default setModals