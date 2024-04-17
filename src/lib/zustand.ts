import zustand from "zustand";
import { create } from "zustand";

//타입 지정 ( interface )

interface ModalState {
  modalState: boolean;
  openModal: () => void;
  closeModal: () => void;
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
