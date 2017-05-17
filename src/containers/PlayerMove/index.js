import React from 'react'

import ButtonMove from '../../components/ButtonMove/'

import './styles.css'

class PlayerMove extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      move: null,
    }

    this._setMove = this._setMove.bind(this)
  }

  _setMove(move) {
    this.setState({
      move
    })
    // Emit player and their move.
    this.props.onPick(this.props.player, move)
  }

  render() {
    const notificationElement = (
      <span className='PlayerMove__notification'>Done!</span>
    )

    const instructionElement = (
      <span className='PlayerMove__instruction'>Pick a move</span>
    )

    const buttonsElements = this.props.moves.map(e => (
      <ButtonMove
        key={e.id}
        move={e}
        onClick={this._setMove}
      />
    ))

    const { move } = this.state

    return (
      <div className='PlayerMove'>
        <strong className='PlayerMove__player-name'>
          {this.props.player.name}
        </strong>
        {move && notificationElement}
        {!move && instructionElement}
        {!move && buttonsElements}
      </div>
    )
  }
}

export default PlayerMove
