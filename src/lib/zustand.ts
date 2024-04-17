import { create } from "zustand"; // create로 zustand를 불러옵니다.

//Todo
//모달 이름 case화 해서 페이지 최상단에 코드 한줄로 적용시키기
export interface IsetModals {
  modalState: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const setModals = create((set) => ({
  modalState: false,
  emailExisted: false, // 이메일 중복 모달 상태
  registerSuccess: false, // 회원가입 성공 모달 상태
  openModal: () => set({ modalState: true }),
  closeModal: () => set({ modalState: false }),
  // 한 페이지에서 둘 다 열려면 이게 최선인가..? 아시는 분은 코드리뷰 부탁해여..
  openEmailExistedModal: () => set({ emailExisted: true }),
  closeEmailExistedModal: () => set({ emailExisted: false }),
  openRegisterSuccessModal: () => set({ registerSuccess: true }),
  closeRegisterSuccessModal: () => set({ registerSuccess: false }),
}));

export default setModals;
