import React from 'react'

import './styles.css'

import SectionTitle from '../SectionTitle/'
import PlayerMove from '../PlayerMove/'

const Round = props => {
  const { player1, player2 } = props.players

  return (
    <div className='Round'>
      <SectionTitle text={`Round ${props.roundNumber}`} />
      <div className="Round__moves">
        <PlayerMove
          player={player1}
        />
        <PlayerMove
          player={player2}
        />
      </div>
    </div>
  )
}

export default Round
