import { ObjectId } from "mongodb";
import { db } from "../index.js";

class Notes {
  static checkId(id) {
    if (!ObjectId.isValid(id)) {
      return false;
    }
    return new ObjectId(id);
  }

  static checkNote(note) {
    if (!note.title || !note.content) {
      return false;
    }
    return { title: note.title, content: note.content };
  }

  static getNotes() {
    return db.collection("notes").find().toArray();
  }

  static getNote(id) {
    id = this.checkId(id);
    if (id === false) {
      return Promise.reject(new Error("Invalid id"));
    }
    return db.collection("notes").findOne({ _id: id });
  }

  static addNote(note) {
    note = this.checkNote(note);
    if (note === false) {
      return Promise.reject(new Error("Invalid note"));
    }
    return db.collection("notes").insertOne(note);
  }

  static updateNote(id, note) {
    id = this.checkId(id);
    if (id === false) {
      return Promise.reject(new Error("Invalid id"));
    }
    note = this.checkNote(note);
    if (note === false) {
      return Promise.reject(new Error("Invalid note"));
    }
    return db.collection("notes").updateOne({ _id: id }, { $set: note });
  }

  static deleteNote(id) {
    id = this.checkId(id);
    if (id === false) {
      return Promise.reject(new Error("Invalid id"));
    }
    return db.collection("notes").deleteOne({ _id: id });
  }
}

export default Notes;
