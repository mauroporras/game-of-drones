import React from 'react'

import './styles.css'

import SectionTitle from '../SectionTitle/'
import PlayerMove from '../PlayerMove/'

class Round extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    const { player1, player2 } = this.props.players
    const { moves, roundNumber } = this.props

    return (
      <div className='Round'>
        <SectionTitle text={`Round ${roundNumber}`} />
        <div className="Round__moves">
          <PlayerMove
            moves={moves}
            player={player1}
          />
          <PlayerMove
            moves={moves}
            player={player2}
          />
        </div>
      </div>
    )
  }
}

export default Round
