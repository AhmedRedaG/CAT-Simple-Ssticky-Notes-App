import express from "express";

import { connectDb, getDb } from "./database/db.js";

const app = express();

const port = 3000;
let db;

connectDb()
  .then(() => {
    app.listen(port, () => {
      console.log(`database connected and server is running on port ${port}`);
    });
    db = getDb();
  })
  .catch((err) => {
    console.error(`Failed to connect to database: ${err.message}`);
  });

export { db };

app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");
