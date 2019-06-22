import React from 'react'
import { useSelector } from 'react-redux'
import Data from '../components/Data'

const DataContainer = ({
  id,
  option
}) => {
  const authedUser = useSelector(state => state.authedUser)
  const questions = useSelector(state => state.questions)
  const users = useSelector(state => state.users)

  const question = questions[id]
  const answer = users[authedUser].answers[id]
  const selected = option === answer
  const total = question.optionOne.votes.length + question.optionTwo.votes.length
  const rate = 100 * question[option].votes.length / total

  return (
    <Data
      question={question}
      option={option}
      selected={selected}
      total={total}
      rate={rate}
    />
  )
}

export default DataContainer
