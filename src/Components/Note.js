import React, { Component } from "react";
import NoteList from "./NoteList";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Todo extends Component {
  constructor() {
    super();

    this.state = {
      notes: [],
      text: ""
    };
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  handleAdd = event => {
    event.preventDefault();
    let data = this.state.text;

    let newNotes = this.state.notes.concat(data);
    this.setState({
      notes: newNotes
    });
    console.log(data, "note has been added");
  };

  handleDelete = id => {
    console.log(id, "note has been deleted");
    let filteredNotes = this.state.notes.filter(note => note !== id);

    this.setState({
      notes: filteredNotes
    });
  };

  render() {
    const notes = this.state.notes;

    return (
      <div className="note-main">
        <p>Todo notes</p>

        <form>
          <textarea
            rows="6"
            placeholder="add new notes here"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <FontAwesomeIcon
            icon={faPlusCircle}
            size="lg"
            onClick={this.handleAdd}
            className="plus-circle"
          />
        </form>
        <NoteList notes={notes} handleDelete={this.handleDelete} />
      </div>
    );
  }
}
export default Todo;
