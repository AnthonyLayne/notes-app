import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import NotesList from "./components/NotesList";
import NoteEditor from "./components/NoteEditor";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="appWrapper">
        <div className="app">
          <Header />

          <Routes>
            <Route exact path="/" element={<NotesList />} />
            <Route exact path="edit" element={<NoteEditor />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
