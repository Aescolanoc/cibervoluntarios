import express from "express";
import cors from "cors";
import axios from "axios";

let app = express();

app.use(cors());

app.use("/books", async (req, res, next) => {
  try {
    const resp = await axios.get("https://demo.api-platform.com/books?page=1&itemsPerPage=30");
    res.status(200).send(resp.data["hydra:member"]);
  } catch (error) {
    next(error);
  }
});

let port = 4500;
app.listen(port);
