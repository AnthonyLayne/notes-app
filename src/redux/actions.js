import { CREATE_NOTE, DELETE_NOTE, EDIT_NOTE } from "./types";

export const createNote = ({ title, description }) => {
  return { type: CREATE_NOTE, payload: { title, description } };
};

export const deleteNote = (id) => {
  return { type: DELETE_NOTE, payload: id };
};

export const editNote = ({ id, title, description }) => {
  const payload = { id };
  if (title !== undefined) payload.title = title;
  if (description !== undefined) payload.description = description;

  return { type: EDIT_NOTE, payload };
};
