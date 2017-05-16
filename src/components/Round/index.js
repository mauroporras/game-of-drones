import React from 'react'

import './styles.css'

import SectionTitle from '../SectionTitle/'
import PlayerMove from '../PlayerMove/'

class Round extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      allDone: false,
      result: "It's a tie!",
      player1: {
        done: false,
        moveId: null,
      },
      player2: {
        done: false,
        moveId: null,
      },
    }

    this._player1Done = this._player1Done.bind(this)
    this._player2Done = this._player2Done.bind(this)
  }

  _player1Done(moveId) {
    this.setState({
      player1: {
        done: true,
        moveId
      }
    }, this._setScore)
  }

  _player2Done(moveId) {
    this.setState({
      player2: {
        done: true,
        moveId
      }
    }, this._setScore)
  }

  _setScore() {
    const { player1, player2 } = this.state

    if (player1.done && player2.done) {
      this.setState({
        allDone: true
      })

      if (player1.moveId !== player2.moveId) {
        // If there is no tie, find a winner.
        let winner = this.props.players.player1

        // Find out if Player2 beats Player1.
        if (this.props.moves.find(e => player2.moveId === e.id).beats.indexOf(player1.moveId) >= 0) {
          winner = this.props.players.player2
        }

        this.setState({
          result: `${winner.name} is the winner!`
        })
      }
    }
  }

  render() {
    const { player1, player2 } = this.props.players
    const { moves, roundNumber } = this.props

    const roundMovesElement = (
      <div className="Round__moves">
        <PlayerMove
          moves={moves}
          onPick={this._player1Done}
          player={player1}
        />
        <PlayerMove
          moves={moves}
          onPick={this._player2Done}
          player={player2}
        />
      </div>
    )

    const resultElement = (
      <span>{this.state.result}</span>
    )

    return (
      <div className='Round'>
        <SectionTitle text={`Round ${roundNumber}`} />
        {this.state.allDone && resultElement}
        {!this.state.allDone && roundMovesElement}
      </div>
    )
  }
}

export default Round
