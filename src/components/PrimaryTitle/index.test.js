import React from 'react'
import renderer from 'react-test-renderer'

import PrimaryTitle from './index'

test("Component renders the correct text", () => {
  const component = renderer.create(
    <PrimaryTitle text='Hello' />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
