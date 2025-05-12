import express from "express";

import { connectDb } from "./database/db.js";

const app = express();

let db;
connectDb.then(() => {
  app.listen(3000, (connect) => {
    db = connect;
    console.log("Server started");
  });
});
