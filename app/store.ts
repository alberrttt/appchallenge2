import { create } from "zustand";
interface LoginState {
  name: string;
  logged_in: boolean;
  setLoggedIn: (name: string) => void;
}
export const useLoginStore = create<LoginState>((set) => ({
  name: "",
  logged_in: false,
  setLoggedIn: (name: string) => set({ name, logged_in: true }),
}));

interface ScreenState {
  blur: boolean;
  setBlur: (blur: boolean) => void;
}
export const useScreenStore = create<LoginState>((set) => ({
  name: "",
  logged_in: false,
  setLoggedIn: (name: string) => set({ name, logged_in: true }),
}));
