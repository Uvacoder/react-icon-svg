import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

import * as serviceWorker from './serviceWorker';


ReactDOM.render(<App />, document.getElementById('root'));

//**untuk duotone icon */
//npx @svgr/cli -d ./dir_source ./dir_dest 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
