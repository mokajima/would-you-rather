/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import { users } from 'utils/_DATA'
import NewQuestion from '.'

const authedUser = Object.keys(users)[0]

storiesOf('NewQuestion', module).add('default', () => (
  <NewQuestion
    authedUser={text('authedUser', authedUser)}
    addQuestion={() => {}}
  />
))
