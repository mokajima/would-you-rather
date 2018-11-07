import React from 'react';
import { connect } from 'react-redux'

function ScoreCard(props) {
  const answeredQuestions = Object.keys(props.user.answers).length
  const createdQuestions = props.user.questions.length

  return (
    <div className="score-card">
      <div className="score-card__col score-card__avatar">
        <img
          className="avatar avatar--md"
          src={props.user.avatarURL}
          alt=""
        />
      </div>
      <div className="score-card__col">
        <span className="score-card__name">{props.user.name}</span>
        <table className="score-card__table">
          <tr>
            <th>Answered questions</th>
            <td>{answeredQuestions}</td>
          </tr>
          <tr>
            <th>Created questions</th>
            <td>{createdQuestions}</td>
          </tr>
        </table>
      </div>
      <dl className="score-card__col score">
        <dt className="score__title">Score</dt>
        <dd className="score__data">{answeredQuestions + createdQuestions}</dd>
      </dl>
    </div>
  )
}

function mapStateToProps({ users }, { id }) {
  return {
    user: users[id]
  }
}

export default connect(mapStateToProps)(ScoreCard)
