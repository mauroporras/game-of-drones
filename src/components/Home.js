import React from 'react'

import GameScreen from './GameScreen/'
import ConfigPlayers from './ConfigPlayers/';

const Home = () => (
  <GameScreen title='New Game'>
    <ConfigPlayers
      onSubmit={config => console.info(config)}
    >
    </ConfigPlayers>
  </GameScreen>
)

export default Home
