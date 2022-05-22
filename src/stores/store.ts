import * as api from "../services/api";
import { defineStore } from "pinia";

export default interface Books {
  ["@id"]: string;
  ["@type"]: string;
  author: string;
  description: string;
  id: string;
  isbn: string;
  publicationDate: string;
  reviews: object[];
  title: string;
}

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
    allBooks: [] as Books[],
  }),
  actions: {
    async removeOds(id: number) {
      const index = this.userData.ods.findIndex((element: number) => element === id);
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

    async getAllBooks() {
      try {
        if (this.allBooks.length) {
          return this.allBooks;
        } else {
          const { data } = await api.getAll();
          this.allBooks = data;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
});
