import React from 'react'

import GameScreen from './GameScreen/'
import ConfigPlayers from './ConfigPlayers/';

const Home = () => (
  <GameScreen title='New Game'>
    <ConfigPlayers
      onSubmit={() => console.info('foo')}
    >
    </ConfigPlayers>
  </GameScreen>
)

export default Home
