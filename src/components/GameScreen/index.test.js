import React from 'react'
import renderer from 'react-test-renderer'

import GameScreen from './index'

test("Component renders the correct children", () => {
  const component = renderer.create(
    <GameScreen>
      <div>Game on!</div>
    </GameScreen>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
