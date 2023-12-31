import { create } from "zustand";
interface LoginState {
  name: string;
  zipcode: number;
  logged_in: boolean;
  setLoggedIn: (name: string) => void;
}
export const useLoginStore = create<LoginState>((set) => ({
  zipcode: 92833,
  name: "",
  logged_in: false,
  setLoggedIn: (name: string) => set({ name, logged_in: true }),
}));
export const useApplications = create<{
  applications: Application[];
  setApplications: (applications: Application[]) => void;
  pushApplication: (application: Application) => void;
  current: Application;
  setCurrent: (application: Application) => void;
}>((set) => ({
  applications: [],
  current: undefined as unknown as Application,

  setApplications: (applications: Application[]) =>
    set({ applications: applications }),
  pushApplication: (application: Application) =>
    set((state) => ({ applications: [...state.applications, application] })),
  setCurrent: (current: Application) => set((state) => ({ ...state, current })),
}));
export const useGoalData = create<{
  setYear: (year: number) => void;
  year: number;
  setSemester: (semester: number) => void;
  semester: number;
}>((set) => ({
  year: 10,
  setYear: (year: number) => set({ year: year }),
  semester: 5,
  setSemester: (semester: number) => set({ semester: semester }),
}));

interface ScreenState {
  blur: boolean;
  setBlur: (blur: boolean) => void;
}
