import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import Home from './components/Home'
import Play from './components/Play'

import './App.css'

const App = () => (
  <Router>
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/play' component={Play} />
    </div>
  </Router>
)

export default App
