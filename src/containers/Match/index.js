import React from 'react'
import R from 'ramda'

import GameScreen from '../../components/GameScreen/'
import Round from '../Round/'

import './styles.css'

class Match extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentRound: 0,
      roundsElements: [],
      winners: [],
      roundsWonToWinMatch: 3,
      players: [],
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

    this._roundDone = this._roundDone.bind(this)
  }

  componentDidMount() {
    let players = localStorage.getItem('players')
    if (players) {
      players = JSON.parse(players)
      this.setState({
        players
      }, () => this._addRound())
    }
  }

  _addRound() {
    const { moves } = this.state.rules
    const { players } = this.state
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
    const { winners, roundsWonToWinMatch } = this.state
    if (winners.length >= roundsWonToWinMatch) {
      const scores = R.countBy(R.trim)(winners.map(e => e.name))
      const champion = Object.keys(scores)
        .find(e => scores[e] >= roundsWonToWinMatch)
      debugger
    }
  }

  render() {
    const { roundsWonToWinMatch } = this.state
    return (
      <GameScreen title={'Match in Progress'}>
        <ul className='Match__instructions'>
          <li>Win {roundsWonToWinMatch} rounds to be the Emperor.</li>
          <li>Pick your moves one at a time.</li>
          <li>Remember to look away, don't cheat!</li>
        </ul>
        {this.state.roundsElements}
      </GameScreen>
    )
  }
}

export default Match
