import { defineStore } from "pinia";

export const useUserFormStore = defineStore({
  id: "user-form",
  state: () => ({
    userData: {
      name: "Pepe" as string,
      lastName: "" as string,
      comment: "" as string,
      ods: [] as number[],
      books: [] as string[],
    },
    step: 1 as number,
  }),
  actions: {
    // saveUserCredentials(data: Object) {
    //   this.userData.name = data.name;
    //   this.userData.lastName = data.lastname;
    //   this.userData.comment = data.comment;
    // },
  },
});
