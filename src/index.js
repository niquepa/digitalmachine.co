import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import './utils/i18n/i18nInit';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
