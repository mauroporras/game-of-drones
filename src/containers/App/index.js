import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import Home from '../../components/Home/'
import Match from '../Match/'
import ScoreBoard from '../ScoreBoard/'

import './styles.css'

const App = () => (
  <Router>
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/match' component={Match} />
      <Route path='/scoreboard' component={ScoreBoard} />
    </div>
  </Router>
)

export default App
