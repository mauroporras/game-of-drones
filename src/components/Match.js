import React from 'react'

import GameScreen from './GameScreen/'
import Round from '../containers/Round/'

class Match extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentRound: 0,
      roundsElements: [],
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
          roundsWon: 0,
        },
        {
          name: 'Mauro',
          roundsWon: 0,
        },
      ],
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
    console.info(winner)
    this._addRound()
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
