import React from 'react'
import { storiesOf } from '@storybook/react'
import { number, object } from '@storybook/addon-knobs'
import { Answer, questions } from 'utils/_DATA'
import Data from '.'

const question = questions[Object.keys(questions)[0]]

const total = question.optionOne.votes.length + question.optionTwo.votes.length

const rate = (option: Answer) => (100 * question[option].votes.length) / total

storiesOf('Data', module)
  .add('default', () => (
    <Data
      question={object('question', question)}
      option="optionOne"
      selected={false}
      total={number('total', total)}
      rate={number('rate', rate('optionOne'))}
    />
  ))
  .add('selected', () => (
    <Data
      question={object('question', question)}
      option="optionOne"
      selected
      total={number('total', total)}
      rate={number('rate', rate('optionOne'))}
    />
  ))
