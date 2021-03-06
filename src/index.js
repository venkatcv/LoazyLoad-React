  import 'core-js/es6/map';
  import 'core-js/es6/set';
  import 'core-js/fn/array/find';
  import 'core-js/fn/array/includes';
  import 'core-js/fn/number/is-nan';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
