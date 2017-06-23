// let's go!
import React from 'react';
import { render } from 'react-dom';

// Import css
import css from './styles/style.styl';

//Import Components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// Import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

//PROVIDER to pass the store down
import { Provider } from 'react-redux';
import store, { history } from './store';
import Raven from 'raven-js';
import { sentry_url, logException } from './data/config';

Raven.config(sentry_url, {
  tags: {
    fit_commit:'asdafskmldkm',
    userLevel:'editor'
  }
}).install();

logException(new Error('download failed!'), {
  email: "whatever@gmail.com"
});

// Raven,showReportDialog(); pops up a message dialogue to report a bug
const router = (
  <Provider store={store}>
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={PhotoGrid}/>
      <Route path="/view/:postId" component={Single}>
      </Route>
    </Route>
  </Router>
  </Provider>
)

render(router, document.getElementById('root'));