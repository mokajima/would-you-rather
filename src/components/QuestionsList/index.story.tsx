import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { storiesOf } from '@storybook/react'
import { array } from '@storybook/addon-knobs'
import { questions, users } from 'utils/_DATA'
import QuestionsList from '.'

storiesOf('QuestionsList', module)
  .addDecorator(story => <BrowserRouter>{story()}</BrowserRouter>)
  .add('default', () => (
    <QuestionsList
      unansweredQuestions={array('unansweredQuestions', Object.keys(questions))}
      answeredQuestions={array('answeredQuestions', Object.keys(questions))}
      questions={questions}
      users={users}
    />
  ))
