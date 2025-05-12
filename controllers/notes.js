import Notes from "../models/notes.js";

export const getNotes = (req, res) => {
  Notes.getNotes().then((notes) => {
    res.render("notes", { notes });
  });
};

export const getAddNote = (req, res) => {
  res.render("add-note");
};

export const postAddNote = (req, res) => {
  const note = req.body;
  Notes.addNote(note).then(() => {
    res.redirect("/notes");
  });
};

export const updateNote = (req, res) => {
  const note = req.body;
  const id = req.params.id;
  Notes.updateNote(id, note).then(() => {
    res.redirect("/notes");
  });
};

export const deleteNote = (req, res) => {
  const id = req.params.id;
  Notes.deleteNote(id).then(() => {
    res.redirect("/notes");
  });
};
