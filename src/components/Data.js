import React from 'react'
import PropTypes from 'prop-types'

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

Data.propTypes = {
  question: PropTypes.object.isRequired,
  answer: PropTypes.string.isRequired,
  option: PropTypes.string.isRequired
}

export default Data
