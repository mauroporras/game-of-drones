import React from 'react'

import GameScreen from './GameScreen/'
import ConfigPlayers from './ConfigPlayers/';

const Home = () => (
  <GameScreen title='New Game'>
    <ConfigPlayers></ConfigPlayers>
  </GameScreen>
)

export default Home
