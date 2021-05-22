import React from 'react';
import ReactDOM from 'react-dom';

// import './main.css'
// import IconGeneratorCode from './CodeGenerator/code-generator';
// import IconShow from './ShowIcons/show-icons';
import Home from './home/home';
// import ReVir from './react-virtualized/app';

import * as serviceWorker from './serviceWorker';


ReactDOM.render(<Home />, document.getElementById('root'));

//**untuk duotone icon */
//npx @svgr/cli -d ./dir_source ./dir_dest 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
