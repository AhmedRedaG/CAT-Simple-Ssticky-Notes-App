import Notes from "../models/notes.js";

export const getNotes = (req, res) => {
  Notes.getNotes()
    .then((notes) => {
      res.render("notes", { pageTitle: "Notes", notes });
    })
    .catch((err) => {
      res.render("error", { pageTitle: "Error", error: err });
    });
};

export const getAddNote = (req, res) => {
  res.render("add-note", { pageTitle: "Add Note", update: false });
};

export const postAddNote = (req, res) => {
  const note = req.body;
  Notes.addNote(note)
    .then(() => {
      res.redirect("/notes");
    })
    .catch((err) => {
      res.render("error", { pageTitle: "Error", error: err });
    });
};

export const getUpdateNote = (req, res) => {
  const id = req.params.id;

  Notes.getNote(id)
    .then((note) => {
      if (!note) {
        res.render("error", { pageTitle: "Error", error: "Note not found" });
      }
      res.render("add-note", { pageTitle: "Update Note", update: true, note });
    })
    .catch((err) => {
      res.render("error", { pageTitle: "Error", error: err });
    });
};

export const postUpdateNote = (req, res) => {
  const note = req.body;
  const id = req.params.id;
  Notes.updateNote(id, note)
    .then(() => {
      res.redirect("/notes");
    })
    .catch((err) => {
      res.render("error", { pageTitle: "Error", error: err });
    });
};

export const getDeleteNote = (req, res) => {
  const id = req.params.id;
  Notes.deleteNote(id)
    .then(() => {
      res.redirect("/notes");
    })
    .catch((err) => {
      res.render("error", { pageTitle: "Error", error: err });
    });
};
