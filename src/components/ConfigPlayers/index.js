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
      }
    }

    this._Player1NameOnChange = this._Player1NameOnChange.bind(this)
    this._Player2NameOnChange = this._Player2NameOnChange.bind(this)
  }

  _Player1NameOnChange(e) {
    this.setState({ player_1: { name: e.target.value } })
  }

  _Player2NameOnChange(e) {
    this.setState({ player_2: { name: e.target.value } })
  }

  render() {
    return (
      <fieldset className='ConfigPlayers'>
        <legend className='ConfigPlayers__legend'>Configure Players</legend>
        <form>
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
              onChange={this._Player1NameOnChange}
              placeholder="Player 1's name"
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
              onChange={this._Player2NameOnChange}
              placeholder="Player 2's name"
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
