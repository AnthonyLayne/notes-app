import React, { useState } from "react";
import { connect } from "react-redux";

import { createNote, deleteNote, editNote } from "../../redux/actions";

import "./index.css";

const EMPTY_NOTE = { title: "empty title", description: "" };

const NoteEditor = ({ note }) => {
  const [noteState, setNoteState] = useState(note ? { ...note } : EMPTY_NOTE);

  const handleSubmit = () => {};

  const handleChange = () => {};

  return (
    <div className="noteEditorWrapper">
      {noteState.title}

      <form onSubmit={handleSubmit}>
        <h3>{note ? "Edit" : "Create"} Note:</h3>
        <input placeholder="New Note" onChange={handleChange} />
        <textarea placeholder="Note Content" rows={12} />
        <button type="submit" className="primary-button">
          Save
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (reduxState, componentProps) => {
  const { id } = componentProps;

  return id ? { note: reduxState.notes[id] } : {};
};

export default connect(mapStateToProps, { createNote, deleteNote, editNote })(NoteEditor);
