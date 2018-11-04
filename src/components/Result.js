import React from 'react';
import { connect } from 'react-redux'

function Result(props) {
  const { optionOne, optionTwo } = props.question
  const { answer } = props

  const total = optionOne.votes.length + optionTwo.votes.length

  return (
    <div>
      <span>Results:</span>
      <div>
        <span>Would you rather {optionOne.text}?</span>
        <span>{Math.round(optionOne.votes.length / total * 1000) / 10}%</span>
        <span>{optionOne.votes.length} out of {total} votes</span>
        {'optionOne' === answer && (
          <span>Your vote</span>
        )}
      </div>
      <div>
        <span>Would you rather {optionTwo.text}?</span>
        <span>{Math.round(optionTwo.votes.length / total * 1000) / 10}%</span>
        <span>{optionTwo.votes.length} out of {total} votes</span>
        {'optionTwo' === answer && (
          <span>Your vote</span>
        )}
      </div>
    </div>
  )
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id]
  const answer = users[authedUser].answers[id]

  return {
    question,
    answer
  }
}

export default connect(mapStateToProps)(Result)
