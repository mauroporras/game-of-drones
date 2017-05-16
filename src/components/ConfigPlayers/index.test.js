import React from 'react'
import renderer from 'react-test-renderer'

import ConfigPlayers from './index'

function createNodeMock() {
  return {
    focus() {
      // Do nothing.
    }
  }
}

test("Component renders correctly", () => {
  const component = renderer.create(
    <ConfigPlayers />,
    { createNodeMock }
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
