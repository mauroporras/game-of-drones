import React from 'react'

import ButtonMove from '../ButtonMove/'

import './styles.css'

class PlayerMove extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      done: false,
      moveId: null,
    }

    this._setMove = this._setMove.bind(this)
  }

  _setMove(id) {
    this.setState({
      done: true,
      moveId: id
    })
  }

  render() {
    const doneElement = (
      <span className='PlayerMove__done'>Done!</span>
    )

    const pickElement = (
      <span className='PlayerMove__pick'>Pick a move</span>
    )

    const buttonsElements = this.props.moves.map(e => (
      <ButtonMove
        key={e.id}
        move={e}
        onClick={this._setMove}
      />
    ))

    return (
      <div className='PlayerMove'>
        <strong className='PlayerMove__player-name'>
          {this.props.player.name}
        </strong>
        <div>
          {this.state.done && doneElement}
          {!this.state.done && pickElement}
          {!this.state.done && buttonsElements}
        </div>
      </div>
    )
  }
}

export default PlayerMove
