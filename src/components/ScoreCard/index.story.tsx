import React from 'react'
import { storiesOf } from '@storybook/react'
import { number, object } from '@storybook/addon-knobs'
import { users } from 'utils/_DATA'
import ScoreCard from '.'

storiesOf('ScoreCard', module).add('default', () => (
  <ScoreCard
    user={object('user', {
      ...users[Object.keys(users)[0]],
      avatarURL: 'http://placehold.jp/255x255.png'
    })}
    answeredQuestions={number('answeredQuestions', 1)}
    createdQuestions={number('createdQuestions', 2)}
    score={number('score', 3)}
  />
))
