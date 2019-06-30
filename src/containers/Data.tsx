import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { State } from '../reducers'
import { Question, Answer } from '../utils/_DATA'
import Data from '../components/Data'

interface DataContainerProps {
  id: Question['id']
  option: Answer
}

const DataContainer: FC<DataContainerProps> = ({
  id,
  option
}) => {
  const authedUser = useSelector((state: State) => state.authedUser)
  const questions = useSelector((state: State) => state.questions)
  const users = useSelector((state: State) => state.users)

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
