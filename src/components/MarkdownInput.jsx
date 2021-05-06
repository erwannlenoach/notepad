import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class MarkdownInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.onSubmitForm = this.onSubmitForm.bind(this);
      }

      onSubmitForm(event) {
        this.setState({value: event.target.value});
       this.props.onFormSubmit(this.state);
        event.preventDefault();
      }
  render() {

    return (
      <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.onSubmitForm} />
      </form>
    );
  }
}

export { MarkdownInput }


