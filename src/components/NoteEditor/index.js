import React, { useState } from "react";
import { connect } from "react-redux";

import { createNote, deleteNote, editNote } from "../../redux/actions";

import "./index.css";

const NoteEditor = ({ id, title, description }) => {
  const [noteState, setNoteState] = useState({});

  const handleSubmit = () => {};

  const handleChange = () => {};

  return (
    <div className="noteEditorWrapper">
      <form onSubmit={handleSubmit}>
        <h3>Creat Note:</h3>
        <input placeholder="New Note" onChange={handleChange} />
        <textarea placeholder="Note Content" rows={12} />
      </form>
      <button className="primary-button">Save</button>
    </div>
  );
};

const mapStateToProps = (state, { id }) => {
  return {};
  return {
    title: state.notes[id].title,
    description: state.notes[id].description,
  };
};

export default connect(mapStateToProps, { createNote, deleteNote, editNote })(NoteEditor);
