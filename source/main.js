import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import './styles/index.less';


ReactDOM.render(<App />, document.getElementById('app'));

// if (module.hot) {
//     module.hot.accept('./App.jsx', () => {
//         ReactDOM.render(<App />, document.getElementById('app'));
//     });
// }