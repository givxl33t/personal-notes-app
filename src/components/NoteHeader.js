import React from 'react';

function NoteHeader ({ searchValue, onSearch }) {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <div className="note-search">
        <input type="text" placeholder="Cari catatan ..." value={searchValue} onChange={onSearch}/>
      </div>
    </div>
  )
}

export default NoteHeader;