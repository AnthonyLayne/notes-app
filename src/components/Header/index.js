import React from "react";

import "./index.css";

export default function Header() {
  return (
    <div className="headerWrapper">
      <h1 className="noteHeader">
        Lambda
        <br />
        Notes
      </h1>
      <button className="primary-button">View Your Notes</button>
      <button className="primary-button">+ Create A New Note</button>
    </div>
  );
}
