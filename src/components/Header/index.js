import React from "react";

import "./index.css";

export default function Header() {
  return (
    <div className="headerWrapper">
      <h1 className="noteHeader">NOTES</h1>
      <button className="viewBttn">View Your Notes</button>
      <button className="createBttn">+ Create A New Note</button>
    </div>
  );
}
