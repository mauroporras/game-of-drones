import React from 'react'

import GameScreen from './GameScreen/'
import Round from './Round/'

const ROUNDS = 3
const players = {
  player1: {
    name: 'nata',
  },
  player2: {
    name: 'mauro',
  },
}

const rounds = []

for (let i = 0; i < ROUNDS; i++) {
  const roundNumber = i + 1
  rounds.push(
    <Round
      players={players}
      roundNumber={roundNumber}
      key={i}
    />
  )
}

const Play = () => (
  <GameScreen title='Match in Progress'>
    {rounds}
  </GameScreen>
)

export default Play
