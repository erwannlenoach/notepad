
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {MarkdownInput} from "./MarkdownInput.jsx"

class NoteDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }

   
      submitForm(values) {
        this.setState({ values })
      }
    

    render() {
       
  const { values } = this.state;

      if(values == null){
        console.log("null")
      }

  let content = values
  
        return (
            <>
             
            <MarkdownInput value={this.state.value}
            onFormSubmit={this.submitForm}
          /> 
            </> 
        )
    }
}

export {NoteDisplay}