import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Painting from './Painting';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Painting />, document.getElementById('root'));
registerServiceWorker();
