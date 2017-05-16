import React from 'react'

import GameScreen from './GameScreen/'
import ConfigPlayers from '../containers/ConfigPlayers/';

const Home = props => (
  <GameScreen title='New Game'>
    <ConfigPlayers
      onSubmit={config => props.history.push('/match')}
    >
    </ConfigPlayers>
  </GameScreen>
)

export default Home
