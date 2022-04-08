import { connect } from "react-redux";

import "./index.css";

function NotesList({ setSelectedId, notes }) {
  return (
    <div className="notesListWrapper">
      <h2 className="header">Your Notes:</h2>
      <button className="primary-button">Alphabetize</button>

      {Object.entries(notes).map(([id, note]) => (
        <button key={id} type="button" className="note" onClick={() => setSelectedId(id)}>
          {note.title}
        </button>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  notes: state.notes,
});

export default connect(mapStateToProps)(NotesList);
