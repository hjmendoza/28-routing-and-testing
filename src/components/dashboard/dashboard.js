import React, { Component, Fragment } from 'react';

import NoteCreateForm from '../notecreateform/notecreateform.js'
import NoteList from '../note-list/note-list.js';

export default class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
  }

  addNote(note) {
    this.setState({
      notes: [...this.state.notes, note]
    });
  }

  removeNote(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes });
  }

  render() {
    return (
      <Fragment>
        <h1>Notes</h1>
        <NoteCreateForm onSubmit={this.addNote} />
        <NoteList notes={this.state.notes} onRemove={this.removeNote} />
      </Fragment>
    );
  }
}
