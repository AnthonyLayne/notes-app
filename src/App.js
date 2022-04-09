import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";

import Header from "./components/Header";
import NotesList from "./components/NotesList";
import NoteEditor from "./components/NoteEditor";

import "./App.css";

// www.notes.com/
// www.notes.com/edit
// www.notes.com/edit/asdlfkjadsasdfasf

function App() {
  let { noteId } = useParams();

  return (
    <Router>
      <div className="appWrapper">
        <div className="app">
          <Header />

          <Routes>
            <Route exact path="/" element={<NotesList />} />
            <Route exact path="edit/" element={<NoteEditor />} />
            <Route exact path="edit/:noteId" element={<NoteEditor id={noteId} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
