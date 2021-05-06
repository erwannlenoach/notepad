import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NoteDisplay} from '../src/components/NoteDisplay'

import { MarkdownInput } from '../src/components/MarkdownInput';

const App = () => {
    return <>
 
    <MarkdownInput/>;
    </>

}

ReactDOM.render(<App />, document.querySelector('#root'));

