import React from 'react'
import PropTypes from 'prop-types'
import './ScoreCard.css'

const ScoreCard = ({
  user,
  answeredQuestions,
  createdQuestions,
  score
}) => (
  <div className="score-card">
    <div className="score-card__col score-card__avatar">
      <img
        className="avatar avatar--md"
        src={user.avatarURL}
        alt=""
      />
    </div>
    <div className="score-card__col">
      <span className="score-card__name">{user.name}</span>
      <table className="score-card__table">
        <tbody>
          <tr>
            <th>Answered questions</th>
            <td>{answeredQuestions}</td>
          </tr>
          <tr>
            <th>Created questions</th>
            <td>{createdQuestions}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <dl className="score-card__col score">
      <dt className="score__title">Score</dt>
      <dd className="score__data">{score}</dd>
    </dl>
  </div>
)

ScoreCard.propTypes = {
  user: PropTypes.object.isRequired,
  answeredQuestions: PropTypes.number.isRequired,
  createdQuestions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired
}

export default ScoreCard
