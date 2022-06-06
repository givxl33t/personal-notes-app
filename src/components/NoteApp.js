import React from 'react';
import NotesList from './NotesList';
import { getInitialData } from '../utils/index';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes });
  }

  onArchiveHandler({ id, archived }) {}

  render() {
    return (
      <div className="note-app__body">
        <h2>Catatan Aktif</h2>
        <NotesList notes={this.state.notes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
      </div>
    );
  }
}

export default NoteApp;