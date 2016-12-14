import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import App from './components/App'
import Dashboard from './components/Dashboard'
import AccountDetailsPage from './components/AccountDetailsPage'


import './styles/index.css'


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={App} />
    <Route path='/dashboard' component={Dashboard} />
    <Route path='/account' component={AccountDetailsPage} />
  </Router>
), document.getElementById('root'))
