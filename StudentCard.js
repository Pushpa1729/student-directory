import React, { useState } from "react";
import "./App.css";

function StudentCard({ name, course }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div
      className={`student-card ${isClicked ? "clicked" : ""}`}
      onClick={() => setIsClicked(!isClicked)}
    >
      <h3>{name}</h3>
      <p>{course}</p>
    </div>
  );
}

export default StudentCard;
