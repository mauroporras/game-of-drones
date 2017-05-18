import React from 'react'
import axios from 'axios'

import GameScreen from '../../components/GameScreen/'
import Dialog from '../../components/Dialog/'

import './styles.css'

class Match extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      scores: []
    }
  }

  componentDidMount() {
    axios.get('https://mauroporrasp.cloudant.com/game-of-drones/_design/names/_view/names')
      .then(r => r.data.rows)
      .then(rows => {
        const scores = rows.reduce(function(a, v) {
          const name = v.value

          if (!a[name]) {
            a[name] = 0
          }
          a[name] += 1

          return a
        }, {})

        this.setState({
          scores
        })
      })
  }

  render() {
    const { scores } = this.state
    const scoresElements = Object.keys(scores).map((e, i) => (
      <li key={i}>{e}: {scores[e]}</li>
    ))

    return (
      <GameScreen title='Score Board'>
        <Dialog>
          <ul className='ScoreBoard__scores'>
            {scoresElements}
          </ul>
        </Dialog>
      </GameScreen>
    )
  }
}

export default Match
