import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { Question as QuestionType, User } from '../../utils/_DATA'
import './index.css'

interface QuestionProps {
  author: User
  question: QuestionType
}

const Question: FC<QuestionProps> = ({ author, question }) => (
  <div className="card">
    <p className="card__title">{author.name} asks: </p>
    <div className="card__content">
      <div className="card__avatar">
        <img className="avatar avatar--md" src={author.avatarURL} alt="" />
      </div>
      <div className="question">
        <p className="question__title">Would you rather</p>
        <p className="question__excerpt">
          ...{question.optionOne.text.substr(0, 14)}...
        </p>
        <NavLink to={`/questions/${question.id}`} className="btn">
          View Poll
        </NavLink>
      </div>
    </div>
  </div>
)

export default Question
