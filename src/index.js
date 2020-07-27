import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { IntlProvider } from 'react-intl';
import * as serviceWorker from './serviceWorker';
import en from './compiled-lang/en.json';
import fr from './compiled-lang/fr.json';

/*function loadLocaleData(locale) {
  switch(locale) {
    case: 'fr';
      return import('compiled-lang/fr.json');
    default:
      return import('compiled-land/en.json');
  }
}*/

const language = 'fr';

ReactDOM.render(
  <React.StrictMode>
    <IntlProvider locale={language} defaultLocale="en" messages={fr}>
      <App />
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
