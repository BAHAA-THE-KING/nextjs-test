import Swal from "sweetalert2";
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
} from "firebase/firestore/lite";

import { app } from "@/app/utils";
import { SetterOrUpdater } from "recoil";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { generateToken } from "./utils";

export function loginAPI(
  data: {
    userName: string;
    password: string;
  },
  setToken: SetterOrUpdater<string | null>,
  setAccountData: SetterOrUpdater<{
    userName: string;
    password: string;
  } | null>,
  router: AppRouterInstance
) {
  const db = getFirestore(app);
  const usersCol = collection(db, "users");
  const tokensCol = collection(db, "tokens");
  const token = generateToken();

  getDocs(usersCol)
    .then((users) => {
      let user: {
        id: string;
        userName: string;
        password: string;
      } | null = null;
      users.forEach((e) => {
        const userData = e.data();
        const id = e.id;
        const userName = userData.userName;
        const password = userData.password;
        if (userName === data.userName) {
          if (password === data.password) {
            user = { id, userName, password };
          } else {
            throw new Error("Wrong password");
          }
        }
      });

      if (!user) throw new Error("User not found");

      return addDoc(tokensCol, {
        user_id: user["id"],
        token,
      });
    })
    .then(() => {
      setAccountData(data);
      setToken(token);
      router.push("/posts");
    })
    .catch((err) => {
      setToken(null);
      setAccountData(null);
      Swal.fire({
        icon: "error",
        title: err?.message ?? "An Error Occurred, Try Again Later.",
        timer: 3000,
      });
    });
}
