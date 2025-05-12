import express from "express";

import { connectDb, getDb } from "./database/db.js";

import notesRouter from "./routes/notes.js";
import rootRouter from "./routes/root.js";
import errorRouter from "./routes/error.js";

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
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.use("/notes", notesRouter);
app.use(rootRouter);
app.use(errorRouter);
