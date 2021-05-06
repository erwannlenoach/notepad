import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NoteDisplay} from './components/NoteDisplay.jsx'

const App = () => <NoteDisplay />;

ReactDOM.render(<App />, document.querySelector('#root'));