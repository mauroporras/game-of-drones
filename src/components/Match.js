import React from 'react'

import GameScreen from './GameScreen/'
import Round from '../containers/Round/'

const state = {
  players: [
    {
      name: 'nata',
      roundsWon: 0,
    },
    {
      name: 'mauro',
      roundsWon: 0,
    },
  ],
  currentRound: 1,
  rules: {
    roundsWonToWinMatch: 3,
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
  },
}

const roundsElements = []

const { moves } = state.rules
const { players } = state
const roundNumber = state.currentRound

roundsElements.push(
  <Round
    key={roundNumber}
    moves={moves}
    players={players}
    roundNumber={roundNumber}
  />
)

const Match = () => (
  <GameScreen title={'Match in Progress'}>
    {roundsElements}
  </GameScreen>
)

export default Match
