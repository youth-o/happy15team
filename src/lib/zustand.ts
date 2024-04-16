import { create } from 'zustand' // create로 zustand를 불러옵니다.


//Todo
//모달 이름 case화 해서 페이지 최상단에 코드 한줄로 적용시키기
export interface IsetModals {
  modalState: boolean,
  openModal: () => void,
  closeModal: () => void,
}

const setModals = create(set => ({
  modalState: false,
  openModal: () => set({ modalState: true }),
  closeModal: () => set({ modalState: false })
}))

export default setModals