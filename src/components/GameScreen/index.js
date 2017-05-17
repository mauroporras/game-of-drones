import React from 'react'

import PrimaryTitle from '../PrimaryTitle/'
import SecondaryTitle from '../SecondaryTitle/'
import Footer from '../Footer/'

import './styles.css'

const GameScreen = props => (
  <div className='GameScreen'>
    <header>
      <PrimaryTitle text='Game of Drones' />
      <SecondaryTitle text={props.title} />
    </header>
    <main>
      {props.children}
    </main>
    <Footer />
  </div>
)

export default GameScreen
