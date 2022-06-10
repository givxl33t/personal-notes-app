import React from 'react';
import NoteHeader from './NoteHeader';
import NoteBody from './NoteBody';
import { getInitialData } from '../utils/index';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      filteredNotes: getInitialData(),
      searchValue: '',
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    const filteredNotes = this.state.filteredNotes.filter(note => note.id !== id);
    this.setState({ notes, filteredNotes });
  }

  onArchiveHandler(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id && !note.archived) return {...note, archived: true}
      else if (note.id === id && note.archived) return {...note, archived: false}
      else return note; 
    });
    const filteredNotes = this.state.filteredNotes.map((note) => {
      if (note.id === id && !note.archived) return {...note, archived: true}
      else if (note.id === id && note.archived) return {...note, archived: false}
      else return note; 
    });
    this.setState({ notes, filteredNotes });
  }

  onAddNoteHandler({ title, body }) {
    const newNote = {
      id: +new Date(),
      title,
      body,
      createdAt: +new Date(),
      archived: false,
    }

    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          newNote,
        ],
        filteredNotes: [
          ...prevState.filteredNotes,
          newNote,
        ]
      }
    });
  }

  onSearchNoteHandler(event) {
    const searchValue = event.target.value.toLowerCase();
    const searchedNote = this.state.notes.filter((note) => {
      if (searchValue === '') {
        return note;
      } else if (note.title.toLowerCase().includes(searchValue)) {
        return note;
      }
    });

    this.setState({ filteredNotes: searchedNote, searchValue });
  }

  render() {
    const displayedNotes = this.state.searchValue.length ? this.state.filteredNotes : this.state.notes;
    return (
      <>
        <NoteHeader searchValue={this.state.searchValue} onSearch={this.onSearchNoteHandler}/>
        <NoteBody notes={displayedNotes} addNote={this.onAddNoteHandler} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
      </>
    );
  }
}

export default NoteApp;