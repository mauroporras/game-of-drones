import React from 'react'

import PrimaryTitle from '../PrimaryTitle/'
import SecondaryTitle from '../SecondaryTitle/'
import Footer from '../Footer/'

const GameScreen = props => (
  <div>
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
