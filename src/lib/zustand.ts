import { create } from "zustand";

//타입 지정 ( interface )

interface ModalState {
  modalState: boolean;
  passwordMismatch: boolean;
  openModal: () => void;
  closeModal: () => void;
  openPasswordMismatchModal: () => void;
  closePasswordMismatchModal: () => void;
}

const useModalStore = create<ModalState>((set) => ({
  modalState: false,
  passwordMismatch: false,
  openModal: () => set({ modalState: true }),
  closeModal: () => set({ modalState: false }),
  openPasswordMismatchModal: () => set({ modalState: true }),
  closePasswordMismatchModal: () => set({ modalState: false }),
}));

export default useModalStore;
