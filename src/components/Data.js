import React from 'react';
import { connect } from 'react-redux'

function Data(props) {
  const { question, answer, option } = props

  const className = option === answer
    ? 'result__option option option--selected'
    : 'result__option option'

  const total = question.optionOne.votes.length + question.optionTwo.votes.length
  const rate = 100 * question[option].votes.length / total

  return (
    <div className={className}>
      <p>Would you rather {question[option].text}?</p>
      <div className="chart">
        <span className="chart__bar" style={{ width: rate + '%' }}></span>
        <span className="chart__text">{rate.toFixed(0)}%</span>
      </div>
      {option === answer
        ? <p className="center">{question[option].votes.length} out of {total} votes (Your vote)</p>
        : <p className="center">{question[option].votes.length} out of {total} votes</p>
      }
    </div>
  )
}

function mapStateToProps({ authedUser, users, questions }, { id, option }) {
  const question = questions[id]
  const answer = users[authedUser].answers[id]

  return {
    question,
    answer,
    option
  }
}

export default connect(mapStateToProps)(Data)
