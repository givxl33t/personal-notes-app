import React from 'react';
import NoteItem from './NoteItem';

function ArchivesList({ archivedNotes, onDelete, onArchive }) {
  if (archivedNotes.length > 0) {
    return (
      <div className="notes-list">
        {
          archivedNotes.map((note) => (
          <NoteItem
          key={note.id}
          id={note.id}
          {...note}
          onDelete={onDelete}
          onArchive={onArchive}/>
          ))
        }
      </div>
    )
  } else {
    return (
      <p className="notes-list__empty-message">Tidak ada catatan</p>
    )
  }
}

export default ArchivesList;