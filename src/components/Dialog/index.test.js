import React from 'react'
import renderer from 'react-test-renderer'

import Dialog from './index'

test("Component renders correctly", () => {
  const component = renderer.create(
    <Dialog />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
