import { defineStore } from "pinia";

export const useUserFormStore = defineStore({
  id: "user-form",
  state: () => ({
    userData: {
      name: "" as string,
      lastName: "" as string,
      comment: "" as string,
      ods: [] as number[],
      books: [] as string[],
    },
    step: 1 as number,
  }),
  actions: {
    async removeOds(id: number) {
      const index = this.userData.ods.findIndex((element: any) => element === id);
      try {
        await this.userData.ods.splice(index, 1);
        return false;
      } catch (error) {
        console.log(error);
      }
    },
    async addOds(id: number) {
      await this.userData.ods.push(id);
    },
  },
});
