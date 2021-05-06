import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NoteDisplay } from './NoteDisplay'


class MarkdownInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', text: '' };
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.onSubmitText = this.onSubmitText.bind(this);
  }

  onSubmitForm(event) {
    this.setState({ value: event.target.value });
    console.log(this.state.value)
  }

  onSubmitText(event) {
    this.setState({ text: event.target.value });
    console.log(this.state.text)
  }



  render() {

    return (
      <>
        <NoteDisplay title={this.state.value} content={this.state.text} />
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.onSubmitForm} />
          <textarea type="text" value={this.state.text} onChange={this.onSubmitText} />
        </form>
      </>
    );
  }
}

export { MarkdownInput }


