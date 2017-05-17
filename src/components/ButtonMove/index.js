import React from 'react'

import './styles.css'

const ButtonMove = props => {
  const { move } = props

  return (
    <button
      className='ButtonMove'
      onClick={() => props.onClick(move)}
    >
      {move.id}
    </button>
  )
}

export default ButtonMove
