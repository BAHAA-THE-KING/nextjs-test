import { atom } from "recoil";

export const accountDataAtom = atom<{
  userName: string;
  password: string;
} | null>({
  key: "account",
  default: null,
});
