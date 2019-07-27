import React from 'react'
import { storiesOf } from '@storybook/react'
import { object } from '@storybook/addon-knobs'
import { questions } from '../../utils/_DATA'
import PollForm from '.'

const question = questions[Object.keys(questions)[0]]

storiesOf('PollForm', module).add('default', () => (
  <PollForm question={object('question', question)} answerQuestion={() => {}} />
))
