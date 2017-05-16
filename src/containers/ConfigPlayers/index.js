import React from 'react'

import './styles.css'

class ConfigPlayers extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      player_1: {
        name: '',
      },
      player_2: {
        name: '',
      },
    }

    this._onSubmit = this._onSubmit.bind(this)
    this._onChangePlayer1Name = this._onChangePlayer1Name.bind(this)
    this._onChangePlayer2Name = this._onChangePlayer2Name.bind(this)
  }

  _onSubmit(e) {
    e.preventDefault()
    this.props.onSubmit(this.state)
  }

  _onChangePlayer1Name(e) {
    this.setState({ player_1: { name: e.target.value.trim() } })
  }

  _onChangePlayer2Name(e) {
    this.setState({ player_2: { name: e.target.value.trim() } })
  }

  componentDidMount() {
    this.toFocus.focus()
  }

  render() {
    return (
      <fieldset className='ConfigPlayers'>
        <form onSubmit={this._onSubmit}>
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
              value={this.state.player_1.name}
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
              value={this.state.player_2.name}
            />
          </div>
          <div className='ConfigPlayers__section'>
            <button type='submit'>Play!</button>
          </div>
        </form>
      </fieldset>
    )
  }
}

export default ConfigPlayers
