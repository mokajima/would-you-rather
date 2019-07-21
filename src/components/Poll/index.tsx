import React, { FC } from 'react'
import { Question, User, Answer } from '../../utils/_DATA'
import Result from '../Result'
import PollForm from '../PollForm'
import logo from '../../logo.svg'
import './index.css'

interface PollProps {
  question: Question | undefined
  author: User | null
  answer: Answer | null
  answerQuestion: (qid: Question['id'], answer: Answer) => void
}

const Poll: FC<PollProps> = ({ question, author, answer, answerQuestion }) => {
  if (!question) {
    return (
      <div>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <p className="center">Oops, the page cannot be found.</p>
      </div>
    )
  }

  return (
    <div className="card">
      {author && <p className="card__title">{author.name} asks:</p>}
      <div className="card__content">
        <div className="card__avatar">
          {author && (
            <img className="avatar avatar--lg" src={author.avatarURL} alt="" />
          )}
        </div>
        {answer ? (
          <Result id={question.id} />
        ) : (
          <PollForm question={question} answerQuestion={answerQuestion} />
        )}
      </div>
    </div>
  )
}

export default Poll
