
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class Save extends React.Component {
  constructor() {
    super();
  }

  render() {

  

    return (
      <>
        <div className="card">
            <h1>Mes notes enregistrées</h1>
          <div className="card-body">
            <h5 className="card-title" dangerouslySetInnerHTML={{ __html: this.props.title }} ></h5>
            <p className="card-subtitle" dangerouslySetInnerHTML={{ __html: this.props.content }} ></p>
          </div>
        </div>
      </>
    )
  }
}

export { Save }