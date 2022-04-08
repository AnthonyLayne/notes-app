import React from "react";

import "./index.css";

export default function NoteEditor() {
  return (
    <div className="noteEditorWrapper">
      <form>
        <h3 className="editHeader">Create/Edit Note:</h3>
        <input className="newNote" placeholder="New Note" />
        <textarea className="noteContent" placeholder="Note Content" />
      </form>
      <button className="primary-button">Save</button>
    </div>
  );
}
