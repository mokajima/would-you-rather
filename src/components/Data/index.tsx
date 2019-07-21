import React, { FC } from 'react'
import { Question, Answer } from '../../utils/_DATA'
import './index.css'

interface DataProps {
  question: Question
  option: Answer
  selected: boolean
  total: number
  rate: number
}

const Data: FC<DataProps> = ({ question, option, selected, total, rate }) => {
  const className = selected
    ? 'result__option option option--selected'
    : 'result__option option'

  return (
    <div className={className}>
      <p>Would you rather {question[option].text}?</p>
      <div className="chart">
        <span className="chart__bar" style={{ width: `${rate}%` }} />
        <span className="chart__text">{rate.toFixed(0)}%</span>
      </div>
      {selected ? (
        <p className="center">
          {question[option].votes.length} out of {total} votes (Your vote)
        </p>
      ) : (
        <p className="center">
          {question[option].votes.length} out of {total} votes
        </p>
      )}
    </div>
  )
}

export default Data
