import { Note } from "../models/note.model";
import { noteValidator } from "../validators/note";

export const getNotes = async (_req: any, res: any) => {
  const notes = await Note.find({});

  if (!notes) {
    res.status(404).json({
      message: "there's no notes yet",
    });
  }

  return res.status(200).json({
    notes: notes,
  });
};

export const getNoteById = async (req: any, res: any) => {
  const { id } = req.params;

  const note = await Note.findOne({
    where: {
      note_id: id,
    },
  });

  if (!note) {
    return res.status(404).json({
      message: "id malformed",
    });
  }

  return res.status(200).json({
    notes: note,
  });
};

export const createNote = async (req: any, res: any) => {
  const validateResult = noteValidator(req.body);
  if (validateResult !== true) {
    return res.status(400).json({ message: validateResult });
  }

  const note = await Note.save({ ...req.body });

  return res.status(201).json({
    message: "Note create succesfully",
    note: note,
  });
};

export const updateNote = async (req: any, res: any) => {
  const { id } = req.params;
  const { content } = req.body;

  const newContent = {
    content: content,
  };

  const postId = await Note.findOne({
    where: {
      note_id: id,
    },
  });

  const updatedNote = await Note.save({
    note_id: postId?.note_id,
    ...newContent,
  });

  return res.status(200).json({
    message: "Note updated succesfully",
    note: updatedNote,
  });
};

export const deleteNote = async (req: any, res: any) => {
  const { id } = req.params;

  await Note.delete(id);

  return res.status(200).json({
    message: "Note deleted succesfully",
  });
};
