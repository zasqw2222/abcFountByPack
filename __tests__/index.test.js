import React from 'react'
import { Test } from '../src/index'
import renderer from 'react-test-renderer'

test('Test changes the class when hovered', () => {
  const component = renderer.create(
    <Test>Facebook</Test>,
  );
  let tree = component.toJSON();
  expect(tree.type).toBe('div')
});