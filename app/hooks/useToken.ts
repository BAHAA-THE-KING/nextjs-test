import { useRecoilState } from "recoil";
import { tokenAtom } from "../atoms/token";

export function useToken() {
  return useRecoilState(tokenAtom);
}
