import { create } from "zustand";
import { UserData } from "@/types/interface";

interface UserStore {
  userData: UserData | null;
  setUserData: (userData: UserData) => void;
}

const useUserStore = create<UserStore>((set) => ({
  userData: null,
  setUserData: (userData) => set((state) => ({ ...state, userData })),
}));

export default useUserStore;
