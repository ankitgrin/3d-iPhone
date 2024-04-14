import { create } from "zustand";

export const useRefStore = create((set) => ({
  displayRef: null,
  updateDisplayRef: (ref) => set(() => ({ displayRef: ref })),
}));
