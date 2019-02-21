import React from 'react'
import { storiesOf } from '@storybook/react'
import { Test } from '../src/index'

storiesOf('test', module)
  .add('basic', () => <Test />)