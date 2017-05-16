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
  rounds: 1,
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
  const { moves } = rules
  const roundNumber = i + 1
  rounds.push(
    <Round
      key={i}
      moves={moves}
      players={players}
      roundNumber={roundNumber}
    />
  )
}

const Match = () => (
  <GameScreen title='Match in Progress'>
    {rounds}
  </GameScreen>
)

export default Match
