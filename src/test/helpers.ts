import app from "../config/app";
import supertest from "supertest";
import { Note } from "../models/note.model";

const api = supertest(app);

const initalNotes = [
  {
    content: "Works?",
    created_at: "2022-04-14T19:00:00.00Z",
  },
  {
    content: "WORKS! :)",
    created_at: "2022-04-14T19:01:00.00Z",
  },
  {
    content: "Next is? ?)",
    created_at: "2022-04-14T19:02:00.00Z",
  },
];

const findNotes = async () => {
  const notes = await Note.find();

  const ids = notes.map(({ note_id }) => note_id);

  return {
    ids: ids,
  };
};

export { api, initalNotes, findNotes };
