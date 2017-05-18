import React from 'react'
import renderer from 'react-test-renderer'

import PlayerMove from './index'

test("Component renders the correct text", () => {
  const component = renderer.create(
    <PlayerMove
      moves={[]}
      player={{ name: 'Foo' }}
    />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
