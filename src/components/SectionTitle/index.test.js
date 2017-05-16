import React from 'react'
import renderer from 'react-test-renderer'

import SectionTitle from './index'

test("Component renders the correct text", () => {
  const component = renderer.create(
    <SectionTitle text='Hello' />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
