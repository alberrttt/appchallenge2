import { create } from "zustand";
interface LoginState {
	name: string;
	logged_in: boolean;
}
export const useLoginStore = create<LoginState>((set) => ({
	name: "",
	logged_in: false,
}));
