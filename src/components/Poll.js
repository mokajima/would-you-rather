import React from 'react';
import { connect } from 'react-redux'
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

function mapStateToProps({ authedUser, users, questions }, props) {
  const { id } = props.match.params

  const question = questions[id]
  const author = question ? users[question.author] : null
  const answer = authedUser ? users[authedUser].answers[id] : null

  return {
    question,
    author,
    answer,
    id
  }
}

export default connect(mapStateToProps)(Poll)
