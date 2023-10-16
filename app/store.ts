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
export const useApplications = create<{
  applications: Application[];
  setApplications: (applications: Application[]) => void;
  pushApplication: (application: Application) => void;
}>((set) => ({
  applications: [
    {
      amountTime:0,
      info: {
        
      }
    }
  ],
  setApplications: (applications: Application[]) =>
    set({ applications: applications }),
  pushApplication: (application: Application) =>
    set((state) => ({ applications: [...state.applications, application] })),
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
