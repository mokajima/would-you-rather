import React, { FC } from 'react'
import { Question, User, Answer } from '../utils/_DATA'
import Result from './Result'
import PollForm from '../containers/PollForm'
import logo from '../logo.svg'
import './Poll.css'

interface PollProps {
  question: Question
  author: User | null
  answer: Answer | null
}

const Poll: FC<PollProps> = ({
  question,
  author,
  answer
}) => {
  if (!question) {
    return (
      <div>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <p className="center">
          Oops, the page cannot be found.
        </p>
      </div>
    )
  }

  return (
    <div className="card">
      {author && (
        <p className="card__title">{author.name} asks:</p>
      )}
      <div className="card__content">
        <div className="card__avatar">
          {author && (
            <img
              className="avatar avatar--lg"
              src={author.avatarURL}
              alt=""
            />
          )}
        </div>
        {answer
          ? <Result id={question.id} />
          : <PollForm id={question.id} / >
        }
      </div>
    </div>
  )
}

export default Poll
