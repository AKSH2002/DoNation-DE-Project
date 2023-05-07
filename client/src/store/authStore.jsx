import { create } from "zustand";
import { persist } from "zustand/middleware";

const Store = persist((set) => (
  {
    token: "",
    user: "",

    userLogin: (data) => {
      set({
        token: data.token,
        user: data.user,
      });
    },
    userLogout: () => {
      set({
        token: "",
        user: "",
      });
    },
  }
),
  {
    name: "user-auth", // name of the item in the storage (must be unique)
    getStorage: () => localStorage,
  }
);

export const authStore = create(Store);
