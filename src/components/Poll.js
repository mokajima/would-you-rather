import React from 'react'
import PropTypes from 'prop-types'
import Result from './Result'
import PollForm from './PollForm'
import logo from '../logo.svg'

function Poll(props) {
  const { question, author, answer, id } = props

  return question
    ? (
      <div className="card">
        <p className="card__title">{author.name} asks:</p>
        <div className="card__content">
          <div className="card__avatar">
            <img
              className="avatar avatar--lg"
              src={props.author.avatarURL}
              alt=""
            />
          </div>
          {answer
            ? <Result id={id} />
            : <PollForm id={id} / >
          }
        </div>
      </div>
    )
    : (
      <div>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <p className="center">Oops, the page cannot be found.</p>
      </div>
    )
}

Poll.propTypes = {
  question: PropTypes.object.isRequired,
  author: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.oneOf([null]).isRequired
  ]),
  answer: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.oneOf([null]).isRequired
  ]),
  id: PropTypes.string.isRequired
}

export default Poll
