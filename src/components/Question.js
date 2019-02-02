import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

function Question(props) {
  return (
    <div className="card">
      <p className="card__title">{props.author.name} asks: </p>
      <div className="card__content">
        <div className="card__avatar">
          <img
            className="avatar avatar--md"
            src={props.author.avatarURL}
            alt=""
          />
        </div>
        <div className="question">
          <p className="question__title">Would you rather</p>
          <p className="question__excerpt">...{props.question.optionOne.text.substr(0, 14)}...</p>
          <NavLink to={`/questions/${props.id}`} className="btn">View Poll</NavLink>
        </div>
      </div>
    </div>
  )
}

Question.propTypes = {
  question: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired
}

export default Question
