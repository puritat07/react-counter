import React from 'react';
import ReactDOM from 'react-dom';
import ScalarCounter from './ScalarCounter';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ScalarCounter />, document.getElementById('root'));
registerServiceWorker();
