import React from 'react'
import PropTypes from 'prop-types'
import './Data.css'

const Data = ({
  question,
  option,
  selected,
  total,
  rate
}) => {
  const className = selected ? 'result__option option option--selected' : 'result__option option'

  return (
    <div className={className}>
      <p>Would you rather {question[option].text}?</p>
      <div className="chart">
        <span className="chart__bar" style={{ width: rate + '%' }}></span>
        <span className="chart__text">{rate.toFixed(0)}%</span>
      </div>
      {selected
        ? <p className="center">{question[option].votes.length} out of {total} votes (Your vote)</p>
        : <p className="center">{question[option].votes.length} out of {total} votes</p>
      }
    </div>
  )
}

Data.propTypes = {
  question: PropTypes.object.isRequired,
  option: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  total: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired
}

export default Data
