import { ObjectId } from "mongodb";
import { db } from "../index.js";

class Notes {
  static getNotes() {
    return db.collection("notes").find().toArray();
  }

  static getNote(id) {
    return db.collection("notes").findOne({ _id: new ObjectId(id) });
  }

  static addNote(note) {
    return db.collection("notes").insertOne(note);
  }

  static deleteNote(id) {
    return db.collection("notes").deleteOne({ _id: new ObjectId(id) });
  }

  static updateNote(id, note) {
    return db
      .collection("notes")
      .updateOne({ _id: new ObjectId(id) }, { $set: note });
  }
}

export default Notes;
