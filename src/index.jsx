import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { MarkdownInput } from '../src/components/MarkdownInput';

const App = () => {
    return <>
 
    <MarkdownInput/>
    </>

}

ReactDOM.render(<App />, document.querySelector('#root'));

