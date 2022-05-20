import axios from "axios";

const BOOKS_API = "https://demo.api-platform.com/books?page=1&itemsPerPage=30";

const api = axios.create({
  baseURL: "https://demo.api-platform.com",
  timeout: 20000,
});

export function getAll() {
  return axios.get(BOOKS_API);
}

// export function getAll(): any {
//   return api.get("/books?page=1&itemsPerPage=30", {
//     headers: {
//       Accept: "application/json, text/plain, */*",
//       "Access-Control-Allow-Headers": "Content-Type",
//       "Access-Control-Allow-Origin": "http://localhost:3000/form",
//       "Access-Control-Allow-Methods": "GET",
//       Referer: "http://localhost:3000/",
//     },
//   });
// }
