import React from 'react';
import NoteItemContent from './NoteItemContent';
import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton';

function NoteItem({ id ,title, body , createdAt, archived, onDelete, onArchive  }) {
  return (
    <div className="note-item">
      <NoteItemContent title={title} body={body} createdAt={createdAt} />
      <div className="note-item__action">
        <DeleteButton id={id} onDelete={onDelete} />
        <ArchiveButton id={id} archived={archived} onArchive={onArchive} />
      </div>
    </div>
  )
}

export default NoteItem;