import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import NotesList from "./components/NotesList";
import NoteEditor from "./components/NoteEditor";

import "./App.css";

function App() {
  const [selectedId, setSelectedId] = useState();

  return (
    <Router>
      <div className="appWrapper">
        <div className="app">
          <Header />

          <Routes>
            <Route exact path="/" element={<NotesList setSelectedId={setSelectedId} />} />
            <Route exact path="edit" element={<NoteEditor id={selectedId} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
