import autoBindReact from 'auto-bind/react';
import React from 'react';
class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      titleMaxLength: 50,
      title: '',
      body: '',
    }
    autoBindReact(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState((prevState) => {
      if (event.target.value.length === 51) {
        return {
          ...prevState,
        }
      } else {
        return {
          ...prevState,
          title: event.target.value,
          titleMaxLength: 50 - event.target.value.length,
        }
      }
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        body: event.target.value,
      }
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    if (this.state.title === '' || this.state.body === '') {
      alert('Please enter the inputs!');
    } else {
      this.props.addNote(this.state);
    }
  }

  render() {
    return (
      <div className="note-input">
        <h2>Buat Catatan</h2>
        <form onSubmit={this.onSubmitEventHandler}>
          <p className="note-input__title__char-limit"> Sisa karakter: {this.state.titleMaxLength}</p>
          <input className="note-input__title" type="text" placeholder="Ini adalah judul ..." value={this.state.title} onChange={this.onTitleChangeEventHandler} />
          <textarea className="note-input__body" type="text" placeholder="Tuliskan catatanmu di sini ..." value={this.state.body} onChange={this.onBodyChangeEventHandler} />
          <button type="submit">Buat</button>
        </form>
      </div>
      
    )
  }
}

export default NoteInput;