import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { storiesOf } from '@storybook/react'
import { object } from '@storybook/addon-knobs'
import { users } from '../../utils/_DATA'
import Nav from '.'

const user = users[Object.keys(users)[0]]

storiesOf('Nav', module)
  .addDecorator(story => <BrowserRouter>{story()}</BrowserRouter>)
  .add('default', () => <Nav user={null} removeAuthedUser={() => {}} />)
  .add('logged in', () => (
    <Nav
      user={object('user', {
        ...user,
        avatarURL: 'http://placehold.jp/255x255.png'
      })}
      removeAuthedUser={() => {}}
    />
  ))
