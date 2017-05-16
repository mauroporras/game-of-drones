import React from 'react'
import renderer from 'react-test-renderer'

import SecondaryTitle from './index'

test("Component renders the correct text", () => {
  const component = renderer.create(
    <SecondaryTitle text='Hello' />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
