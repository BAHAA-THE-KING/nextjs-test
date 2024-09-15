import { useRecoilState } from "recoil";
import { accountDataAtom } from "../atoms/account";

export function useAccountData() {
  return useRecoilState(accountDataAtom);
}
