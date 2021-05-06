import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NoteDisplay } from './NoteDisplay'
import { Save } from './Save'
import Showdown from 'showdown';

const converter = new Showdown.Converter();


class MarkdownInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', text: '', valueSaved: '', textSaved: '' };
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.onSubmitText = this.onSubmitText.bind(this);
    this.onSavedText = this.onSavedText.bind(this);
  }

  onSubmitForm(event) {
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

    this.setState({ valueSaved: localStorage.getItem('titleStored') });
    this.setState({ textSaved: localStorage.getItem('textStored') });
    console.log(this.state.valueSaved)
    console.log(this.state.textSaved)
  }

  render() {



    const noteTitle = converter.makeHtml(this.state.value)
    const notes = converter.makeHtml(this.state.text)

    console.log(notes)

    return (
      <>
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <Save title={this.state.valueSaved} content={this.state.textSaved} />
            </div>

            <div class="col-sm">
              <div className="card" >
               
                <NoteDisplay title={noteTitle} content={notes} />
              </div>

              <div className="card">

                <div className="card-body">
                  <h5 className="card-title" dangerouslySetInnerHTML={{ __html: this.props.title }} ></h5>
                  <p className="card-text" dangerouslySetInnerHTML={{ __html: this.props.content }} ></p>

                </div>
              </div>


              <div className="card">
                <div className='card-body'>
                  <form onSubmit={this.handleSubmit}>
                    <div className='card-title'>
                      <h1>Nouvelle note</h1>
                      <input placeholder="écris un titre" type="text" value={this.state.value} onChange={this.onSubmitForm} />
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
    );
  }
}

export { MarkdownInput }


