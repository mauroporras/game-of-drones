import React from 'react'
import renderer from 'react-test-renderer'

import Button from './index'

test("Component renders the correct text", () => {
  const component = renderer.create(
    <Button text='Go!' />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
