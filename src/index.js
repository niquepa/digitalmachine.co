import React from 'react';
import { hydrate, render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import './utils/i18n/i18nInit';

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrate(<BrowserRouter><App /></BrowserRouter>, rootElement);
} else {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    rootElement,
  );
}

registerServiceWorker();
