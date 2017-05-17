import React from 'react'

import './styles.css'

const Button = props => {
  return (
    <button
      className='Button'
      onClick={props.onClick}
      type={props.type}
    >
      {props.text}
    </button>
  )
}

export default Button
