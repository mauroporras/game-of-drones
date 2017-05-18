import React from 'react'

import Dialog from '../../components/Dialog/'
import Button from '../../components/Button'

import './styles.css'

class ConfigPlayers extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      player1: {
        name: '',
      },
      player2: {
        name: '',
      },
    }

    this._onSubmit = this._onSubmit.bind(this)
    this._onChangePlayer1Name = this._onChangePlayer1Name.bind(this)
    this._onChangePlayer2Name = this._onChangePlayer2Name.bind(this)
  }

  _onSubmit(e) {
    e.preventDefault()

    window.localStorage.setItem(
      'players',
      JSON.stringify([this.state.player1, this.state.player2])
    )
    this.props.onSubmit()
  }

  _onChangePlayer1Name(e) {
    this.setState({ player1: { name: e.target.value.trim() } })
  }

  _onChangePlayer2Name(e) {
    this.setState({ player2: { name: e.target.value.trim() } })
  }

  componentDidMount() {
    this.toFocus.focus()

    let players = window.localStorage.getItem('players')
    if (players) {
      players = JSON.parse(players)
      this.setState({
        player1: players[0],
        player2: players[1],
      })
    }
  }

  render() {
    return (
      <Dialog>
        <form className='ConfigPlayers__form' onSubmit={this._onSubmit}>
          <div className='ConfigPlayers__section'>
            <label
              className='ConfigPlayers__label'
              htmlFor='player1-name'
            >
              Player 1
            </label>
            <input
              className='ConfigPlayers__input-text'
              id='player1-name'
              onChange={this._onChangePlayer1Name}
              placeholder="Player 1's name"
              ref={input => this.toFocus = input}
              required
              type='text'
              value={this.state.player1.name}
            />
          </div>
          <div className='ConfigPlayers__section'>
            <label
              className='ConfigPlayers__label'
              htmlFor='player2-name'
            >
              Player 2
            </label>
            <input
              className='ConfigPlayers__input-text'
              id='player2-name'
              onChange={this._onChangePlayer2Name}
              placeholder="Player 2's name"
              required
              type='text'
              value={this.state.player2.name}
            />
          </div>
          <div className='ConfigPlayers__section'>
            <Button text='Play!' type='submit' />
          </div>
        </form>
      </Dialog>
    )
  }
}

export default ConfigPlayers
