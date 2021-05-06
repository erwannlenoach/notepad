
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class NoteDisplay extends React.Component {
  constructor() {
    super();
    this.state = { value: '' };

  }

  onChange(event) {
    this.setState({ value: event.target.value });
    event.preventDefault();
  }


  render() {

  

    return (
      <>
        <div className="card">
          <div className="card-body">
          <h1>Ma note</h1>
            <h5 className="card-title" dangerouslySetInnerHTML={{ __html: this.props.title }} ></h5>
            <p className="card-text" dangerouslySetInnerHTML={{ __html: this.props.content }} ></p>

          </div>
        </div>
      </>
    )
  }
}

export { NoteDisplay }