import REACT from "react";
import ReactDOM from "react-dom";
import Note from "./notes.jsx";
import notes from "../notes.js";

function MappedNotes() {
  return notes.map((item) => {
    return <Note key={item.id} title={item.title} content={item.content} />;
  });
}

export default MappedNotes;
