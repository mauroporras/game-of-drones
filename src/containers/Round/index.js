import React from 'react'

import './styles.css'

import Dialog from '../../components/Dialog/'
import PlayerMove from '../PlayerMove/'

class Round extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      allDone: false,
      result: "It's a tie!",
      playersDone: [],
    }

    this._playerDone = this._playerDone.bind(this)
  }

  _playerDone(player, move) {
    player.move = move
    this.setState({
      playersDone: [
        ...this.state.playersDone,
        player
      ]
    }, this._setScore)
  }

  _setScore() {
    if (this.state.playersDone.length < 2) {
      return
    }

    const player1 = this.state.playersDone[0]
    const player2 = this.state.playersDone[1]

    this.setState({
      allDone: true
    })

    let winner = null
    // If it's not a tie, find the winner.
    if (player1.move.id !== player2.move.id) {
      winner = player1

      // Find out if Player2 beats Player1.
      if (player2.move.beats.indexOf(player1.move.id) >= 0) {
        winner = player2
      }

      this.setState({
        result: `${winner.name} is the winner!`
      })
    }

    // Emit winner.
    this.props.onDone(winner)
  }

  render() {
    const { moves, players, roundNumber } = this.props

    const roundMovesElement = (
      players.map((e, i) => (
        <PlayerMove
          key={i}
          moves={moves}
          onPick={this._playerDone}
          player={e}
        />
      ))
    )

    const resultElement = (
      <span className='Round__result'>{this.state.result}</span>
    )

    return (
      <Dialog>
        <div className='Round__header'>
          <h3 className='Round__title'>{`Round ${roundNumber}`}</h3>
        </div>
        <div className='Round__body'>
          {this.state.allDone && resultElement}
          {!this.state.allDone && roundMovesElement}
        </div>
      </Dialog>
    )
  }
}

export default Round
