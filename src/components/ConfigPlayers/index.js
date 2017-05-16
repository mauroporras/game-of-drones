import React from 'react'

import './styles.css'

const ConfigPlayers = () => (
  <fieldset>
    <legend>Enter your names</legend>
    <form>
      <div>
        <label htmlFor='player1-name'>Player 1</label>
        <input type='text' id='player1-name' />
      </div>
      <div>
        <label htmlFor='player2-name'>Player 2</label>
        <input type='text' id='player2-name' />
      </div>
      <div>
        <button type='submit'>Play!</button>
      </div>
    </form>
  </fieldset>
)

export default ConfigPlayers
