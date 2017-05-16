import React from 'react'

import './styles.css'

import PlayerMove from '../PlayerMove/'

const Round = props => (
  <div>
    <p>Round {props.roundNumber}</p>
    <PlayerMove playerName='mauro' />
    <PlayerMove playerName='mauro' />
  </div>
)

export default Round
