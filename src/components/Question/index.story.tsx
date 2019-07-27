import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { storiesOf } from '@storybook/react'
import { object } from '@storybook/addon-knobs'
import { questions, users } from '../../utils/_DATA'
import Question from '.'

const author = users[Object.keys(users)[0]]
const question = questions[Object.keys(questions)[0]]

storiesOf('Question', module)
  .addDecorator(story => <BrowserRouter>{story()}</BrowserRouter>)
  .add('default', () => (
    <Question
      author={object('author', {
        ...author,
        avatarURL: 'http://placehold.jp/255x255.png'
      })}
      question={object('question', question)}
    />
  ))
