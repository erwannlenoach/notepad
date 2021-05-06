
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {MarkdownInput} from "./MarkdownInput.jsx"

class NoteDisplay extends React.Component {
    constructor() {
        super();
        this.state = {value: ''};
        this.submitForm = this.submitForm.bind(this);
     

      }
    
      onChange(event) {
        this.setState({value: event.target.value});
        event.preventDefault();
      }

   
      submitForm(values) {
        this.setState({ values })
      }
    
      

    render() {

      var values = this.state
   

      var myJSON = JSON.stringify(values);

   
    
     // let Arr = ["vos notes"]
    //  Arr.unshift(values.value)
  console.log(myJSON)

   
        return (
            <>
              <div>Input value{myJSON}</div>
            <MarkdownInput 
            onFormSubmit={this.submitForm}  value={this.state.value} onChange={this.onChange}
          /> 
            </> 
        )
    }
}

export {NoteDisplay}