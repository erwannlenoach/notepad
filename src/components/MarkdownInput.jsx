import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NoteDisplay } from './NoteDisplay'
import { SavedNote } from './SavedNote'
import Showdown from 'showdown';

const converter = new Showdown.Converter();


class MarkdownInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', text: '',titleSaved: '', textSaved: '' };
    this.onSubmitTitle = this.onSubmitTitle.bind(this);
    this.onSubmitText = this.onSubmitText.bind(this);
    this.onSavedText = this.onSavedText.bind(this);
  }

  onSubmitTitle(event) {
    this.setState({ value: event.target.value });
    console.log(this.state.value)
    localStorage.setItem('titleStored', this.state.value);
  }

  onSubmitText(event) {
    this.setState({ text: event.target.value });
    console.log(this.state.text)
    localStorage.setItem('textStored', this.state.text);
  }

  onSavedText() {

    this.setState({ titleSaved: localStorage.getItem('titleStored') });
    this.setState({ textSaved: localStorage.getItem('textStored') });
    console.log(this.state.valueSaved)
    console.log(this.state.textSaved)
  }

  render() {

    const mystyle = {
      backgroundColor: "Black",
      padding: "10px",
      fontFamily: "Arial"
    };

    const noteTitle = converter.makeHtml(this.state.value)
    const notes = converter.makeHtml(this.state.text)

    console.log(notes)

    return (
      <>
        <div className="container" style={mystyle}>
          <div className="row">
            <div className="col-sm">
              <SavedNote title={this.state.titleSaved} content={this.state.textSaved} />
            </div>

            <div className="col-sm">
              <div className="card" >
               
                <NoteDisplay title={noteTitle} content={notes} />
              </div>

              <div className="card">
                <div className='card-body'>
                  <form onSubmit={this.handleSubmit}>
                    <div className='card-title'>
                      <h1>Nouvelle note</h1>
                      <input placeholder="écris un titre" type="text" value={this.state.value} onChange={this.onSubmitTitle} />
                    </div>
                    <div className='card-text'>
                      <textarea placeholder="écris ta note" className="card-text" type="text" value={this.state.text} onChange={this.onSubmitText} />
                    </div>
                  </form>
                  <button type="button" className="btn btn-primary" onClick={this.onSavedText}>Sauvegarder</button>
                </div>
              </div>


   
            </div>
          </div>
        </div>




      </>
    )
  }
}

export { MarkdownInput }


