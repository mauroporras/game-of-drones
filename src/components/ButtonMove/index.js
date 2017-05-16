import React from 'react'

import './styles.css'

const ButtonMove = props => {
  const { id } = props.move

  return (
    <button
      className='ButtonMove'
      onClick={() => props.onClick(id)}
    >
      {id}
    </button>
  )
}

export default ButtonMove
