import React from 'react'
import { storiesOf } from '@storybook/react'
import { object } from '@storybook/addon-knobs'
import { users } from '../../utils/_DATA'
import Login from '.'

storiesOf('Login', module).add('default', () => (
  <Login users={object('users', users)} setAuthedUser={() => {}} />
))
