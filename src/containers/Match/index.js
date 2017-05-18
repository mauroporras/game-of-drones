import React from 'react'
import R from 'ramda'
import axios from 'axios'

import defaultConfig from '../../config/'

import GameScreen from '../../components/GameScreen/'
import Round from '../Round/'
import SecondaryTitle from '../../components/SecondaryTitle/'
import Dialog from '../../components/Dialog/'
import Button from '../../components/Button/'

import './styles.css'

class Match extends React.Component {
  constructor(props) {
    super(props)

    this._loadConfig()

    this._roundDone = this._roundDone.bind(this)
  }

  _loadConfig() {
    this.defaultConfig = defaultConfig

    let players = window.localStorage.getItem('players')
    if (players) {
      players = JSON.parse(players)
    } else {
      players = defaultConfig.players
    }

    let rules = window.localStorage.getItem('rules')
    if (rules) {
      rules = JSON.parse(rules)
    } else {
      rules = defaultConfig.rules
    }

    this.state = {
      currentRound: 0,
      roundsElements: [],
      winners: [],
      champion: null,
      players,
      rules,
      gameScreenTitle: 'Match in Progress',
    }
  }

  _addRound() {
    const { players, rules } = this.state
    const { moves } = rules

    this.setState({
      currentRound: this.state.currentRound + 1
    }, () => {
      const roundNumber = this.state.currentRound
      this.setState({
        roundsElements: [
          <Round
            key={roundNumber}
            moves={moves}
            onDone={this._roundDone}
            players={players}
            roundNumber={roundNumber}
          />,
          ...this.state.roundsElements
        ]
      })
    })
  }

  _roundDone(winner) {
    if (!winner) {
      this._addRound()
      return
    }

    this.setState({
      winners: [
        ...this.state.winners,
        winner
      ]
    }, () => this._calculateScores())
  }

  _calculateScores() {
    const { roundsWonToWinMatch } = this.state.rules
    const { winners } = this.state

    const scores = R.countBy(R.trim)(winners.map(e => e.name))
    const champion = Object.keys(scores)
      .find(e => scores[e] >= roundsWonToWinMatch)

    if (champion) {
      this.setState({
        champion,
        gameScreenTitle: null,
      })
      axios.post('https://mauroporrasp.cloudant.com/game-of-drones', {
        name: champion
      })
    } else {
      this._addRound()
    }
  }

  componentDidMount() {
    this._addRound()
  }

  render() {
    const { roundsWonToWinMatch } = this.state.rules
    const { champion } = this.state
    return (
      <GameScreen title={this.state.gameScreenTitle}>
        {
          !champion
          &&
          <ul className='Match__instructions'>
            <li>Win {roundsWonToWinMatch} rounds to become the Emperor.</li>
            <li>Pick your moves one player at a time.</li>
            <li>Remember to look away, don't cheat!</li>
          </ul>
        }
        {
          champion
          &&
          <Dialog>
            <div className='Match__winner-wrapper'>
              <SecondaryTitle
                text='We have a Winner!'
              />
              <SecondaryTitle
                text={`${champion} is the new Emperor!`}
              />
              <Button
                onClick={() => window.location.replace('/')}
                text='Play Again'
              />
            </div>
          </Dialog>
        }
        {
          this.state.roundsElements
        }
      </GameScreen>
    )
  }
}

export default Match
