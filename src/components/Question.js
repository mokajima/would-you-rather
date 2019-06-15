import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const Question = ({
  author,
  question,
  id
}) => (
  <div className="card">
    <p className="card__title">{author.name} asks: </p>
    <div className="card__content">
      <div className="card__avatar">
        <img
          className="avatar avatar--md"
          src={author.avatarURL}
          alt=""
        />
      </div>
      <div className="question">
        <p className="question__title">Would you rather</p>
        <p className="question__excerpt">...{question.optionOne.text.substr(0, 14)}...</p>
        <NavLink to={`/questions/${id}`} className="btn">View Poll</NavLink>
      </div>
    </div>
  </div>
)

Question.propTypes = {
  question: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired
}

export default Question
