import React from 'react'

import GameScreen from './GameScreen/'
import Round from './Round/'

const players = {
  player1: {
    name: 'nata',
  },
  player2: {
    name: 'mauro',
  },
}
const rules = {
  rounds: 3,
  moves: [
    {
      id: 'rock',
      beats: ['scissors'],
    },
    {
      id: 'paper',
      beats: ['rock'],
    },
    {
      id: 'scissors',
      beats: ['paper'],
    },
  ]
}

const rounds = []

for (let i = 0; i < rules.rounds; i++) {
  const roundNumber = i + 1
  const { moves } = rules
  rounds.push(
    <Round
      moves={moves}
      players={players}
      roundNumber={roundNumber}
      key={i}
    />
  )
}

const Match = () => (
  <GameScreen title='Match in Progress'>
    {rounds}
  </GameScreen>
)

export default Match
