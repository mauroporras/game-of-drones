import React from 'react'

import './styles.css'

class ConfigPlayers extends React.Component {
  constructor(props) {
    super(props)
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
              autofocus
              className='ConfigPlayers__input-text'
              id='player1-name'
              placeholder="Player 1's name"
              type='text'
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
              placeholder="Player 2's name"
              type='text'
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
