import { create } from "zustand";

export const dataChangeStore = create((set) => ({
  dataChange: false,
  setDataChange: (data) => set({ dataChange: data }),
}));
