import React from 'react'

import GameScreen from './GameScreen/'
import Round from './Round/'

const ROUNDS = 3

const rounds = []

for (let i = 0; i < ROUNDS; i++) {
  const roundNumber = i + 1
  rounds.push(
    <Round
      roundNumber={roundNumber}
      key={i}
    />
  )
}

const Play = () => (
  <GameScreen title='Game in Progress'>
    {rounds}
  </GameScreen>
)

export default Play
