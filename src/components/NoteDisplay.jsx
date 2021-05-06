
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class NoteDisplay extends React.Component {
    constructor() {
        super();
        this.state = {value: ''};

      }
    
      onChange(event) {
        this.setState({value: event.target.value});
        event.preventDefault();
      }

   
    render() {

  
   
        return (
            <>
              <h1>Title: {this.props.title}</h1>
              <div>Text: {this.props.content}</div>
            </> 
        )
    }
}

export {NoteDisplay}