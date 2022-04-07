import Header from "./components/Header";
import NotesList from "./components/NotesList";
import NoteEditor from "./components/NoteEditor";

import "./App.css";

function App() {
  return (
    <div className="appWrapper">
      <div className="app">
        <Header />
        <NotesList />
        <NoteEditor />
      </div>
    </div>
  );
}

export default App;
