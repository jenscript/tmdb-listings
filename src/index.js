import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/home'
import * as serviceWorker from './serviceWorker';

ReactDOM.render((
  <Router>
      <div>
        <Route exact path="/" component={Home} />
      </div>
  </Router>
), document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
