import React from 'react'
import renderer from 'react-test-renderer'

import Footer from './index'

test("Component renders the correct text", () => {
  const component = renderer.create(
    <Footer />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
