import React from 'react';
import { connect } from 'react-redux'
import Result from './Result'
import PollForm from './PollForm'

function Poll(props) {
  const { question, author, answer, id } = props

  return question
    ? (
      <div>
        <span>{author.name} asks:</span>
        <img src={author.avatarURL} alt="" />
        <div>
          <span>Would You Rather...</span>
          {answer
            ? <Result id={id} />
            : <PollForm id={id} / >
          }
        </div>
      </div>
    )
    : (
      <div>404</div>
    )
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id]
  const author = question ? users[question.author] : null
  const answer = authedUser ? users[authedUser].answers[id] : null

  return {
    question,
    author,
    answer
  }
}

export default connect(mapStateToProps)(Poll)
