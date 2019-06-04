import React from "react";
import "./NoteList.js";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NoteList = props => {
  return (
    <div className="note-list-main">
      {props.notes.map(note => {
        return (
          <div className="list-items" key={note}>
            {note}
            <FontAwesomeIcon
              icon={faTrashAlt}
              size="sm"
              onClick={() => {
                props.handleDelete(note);
              }}
              className="trash"
            />
          </div>
        );
      })}
    </div>
  );
};

export default NoteList;
