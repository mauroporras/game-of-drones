import React from 'react'

import GameScreen from './GameScreen/'
import Round from '../containers/Round/'

class Match extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentRound: 0,
      roundsElements: [],
      winners: [],
      roundsWonToWinMatch: 3,
    }

    this._roundDone = this._roundDone.bind(this)
  }

  componentDidMount() {
    this._addRound()
  }

  _addRound() {
    const state = {
      players: [
        {
          name: 'Nata',
        },
        {
          name: 'Mauro',
        },
      ],
      rules: {
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

    const { moves } = state.rules
    const { players } = state
    this.setState({
      currentRound: this.state.currentRound + 1
    }, () => {
      const roundNumber = this.state.currentRound

      this.setState({
        roundsElements: [
          <Round
            key={roundNumber}
            moves={moves}
            onDone={this._roundDone}
            players={players}
            roundNumber={roundNumber}
          />,
          ...this.state.roundsElements
        ]
      })
    })
  }

  _roundDone(winner) {
    this._addRound()
    if (!winner) {
      return
    }

    this.setState({
      winners: [
        ...this.state.winners,
        winner
      ]
    }, () => this._calculateScores())
  }

  _calculateScores() {
    const { winners } = this.state
    if (winners.length >= this.state.roundsWonToWinMatch) {
      debugger
    }
  }

  render() {
    return (
      <GameScreen title={'Match in Progress'}>
        {this.state.roundsElements}
      </GameScreen>
    )
  }
}

export default Match
