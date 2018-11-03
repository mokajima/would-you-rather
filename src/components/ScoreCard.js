import React from 'react';
import { connect } from 'react-redux'

function ScoreCard(props) {
  const answeredQuestions = Object.keys(props.user.answers).length
  const createdQuestions = props.user.questions.length

  return (
    <div>
      <img src={props.user.avatarURL} alt="" />
      <div>
        <span>{props.user.name}</span>
        <span>Answered questions: {answeredQuestions}</span>
        <span>Created questions: {createdQuestions}</span>
      </div>
      <span>Score: {answeredQuestions + createdQuestions}</span>
    </div>
  )
}

function mapStateToProps({ users }, { id }) {
  return {
    user: users[id]
  }
}

export default connect(mapStateToProps)(ScoreCard)
