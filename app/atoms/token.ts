import { atom } from "recoil";

export const tokenAtom = atom<string | null>({
  key: "token",
  default: null,
});
