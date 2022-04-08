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
      <a href="/">
        <button className="primary-button">View Your Notes</button>
      </a>
      <a href="/edit">
        <button className="primary-button">+ Create A New Note</button>
      </a>
    </div>
  );
}
