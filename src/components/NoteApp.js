import React from 'react';
import NotesList from './NotesList';
import ArchivesList from './ArchivesList';
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

  onArchiveHandler(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id && !note.archived) return {...note, archived: true}
      else if (note.id === id && note.archived) return {...note, archived: false}
      else return note; 
    });
    this.setState({ notes });
  }

  render() {
    return (
      <div className="note-app__body">
        <h2>Catatan Aktif</h2>
        <NotesList notes={this.state.notes.filter(note => !note.archived)} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
        <h2>Arsip</h2>
        <ArchivesList archivedNotes={this.state.notes.filter(note => note.archived)} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
      </div>
    );
  }
}

export default NoteApp;