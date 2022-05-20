import axios from "axios";

export function getAll() {
  return axios.get("http://localhost:4500/books");
}
