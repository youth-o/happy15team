import create from 'zustand';

interface modalState {
  openModal: string;
  setOpenModal: (value: string) => void;
}

const modalState = create<modalState>((set) => ({
  openModal: "",
  setOpenModal: (value: string) => set({ openModal: value }),
}));

export default modalState;
