import { Note } from "../models/note.model";
import { api, findNotes, initalNotes } from "./helpers";
import { destroyLocal, localInit } from "../config/connections/local";
import { server } from "..";

beforeAll(async () => {
  await localInit();

  await Note.clear();

  for (const note of initalNotes) {
    await Note.save(note);
  }
});

describe("notes crud tests", () => {
  test("notes are returned as json", async () => {
    await api
      .get("/api/notes")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });
  test("can get a note", async () => {
    const { ids } = await findNotes();

    await api
      .get(`/api/notes/${ids[0]}`)
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });
  test("a note can be created", async () => {
    const note = {
      content: "Creating a new note",
    };

    await api
      .post("/api/notes")
      .send(note)
      .expect(201)
      .expect("Content-Type", /application\/json/);
  });
  test("a empty note cannot be created", async () => {
    const note = {};

    await api
      .post("/api/notes")
      .send(note)
      .expect(400)
      .expect("Content-Type", /application\/json/);
  });
  test("a note can be updated", async () => {
    const { ids } = await findNotes();

    const newNoteContent = {
      content: "Updating the previous note",
      created_at: "2022-04-14T19:03:00.000Z",
    };

    await api
      .put(`/api/notes/${ids[3]}`)
      .send(newNoteContent)
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });
  test("a note can be deleted", async () => {
    const { ids } = await findNotes();

    await api
      .delete(`/api/notes/${ids[3]}`)
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });
});

afterAll(async () => {
  server.close();

  await destroyLocal();
});
