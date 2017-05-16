import React from 'react'

import ButtonMove from '../ButtonMove/'

import './styles.css'

const PlayerMove = props => {
  const buttonsMoves = props.moves.map(e => <ButtonMove move={e} key={e.id} />)
  return (
    <div className='PlayerMove'>
      <strong className='PlayerMove__player-name'>{props.player.name}</strong>
      <div>
        {buttonsMoves}
      </div>
    </div>
  )
}

export default PlayerMove
