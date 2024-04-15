import { create } from "zustand";

export interface UserData {
  email: string;
  nickname: string;
  password: string;
  confirmPassowrd: string;
}

interface UserStore {
  userData: UserData;
  setUserData: (data: UserData) => void;
}

const useUserStore = create<UserStore>((set) => ({
  userData: {
    email: "",
    nickname: "",
    password: "",
    confirmPassowrd: "",
  },
  setUserData: (data) =>
    set((state) => ({ userData: { ...state.userData, ...data } })),
}));

export default useUserStore;
