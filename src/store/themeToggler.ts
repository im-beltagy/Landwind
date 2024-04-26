import { create } from "zustand";

interface themeState {
  theme: "light" | "dark";
  toggle(): void;
}

export const useTheme = create<themeState>()((set) => ({
  theme: "light",
  toggle: () => {
    set((state) => ({ theme: state.theme === "light" ? "dark" : "light" }));
  },
}));
