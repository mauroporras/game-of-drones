import React from 'react'

import './styles.css'

const PlayerMove = props => (
  <div className='PlayerMove'>
    <strong className='PlayerMove__player-name'>{props.player.name}</strong>
  </div>
)

export default PlayerMove
