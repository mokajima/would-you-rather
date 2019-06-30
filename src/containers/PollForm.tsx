import React, { FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Question, Answer } from '../utils/_DATA'
import { State } from '../reducers'
import { answerQuestion } from '../actions/shared'
import PollForm from '../components/PollForm'

interface PollFormContainerProps {
  id: Question['id']
}

const PollFormContainer: FC<PollFormContainerProps> = ({ id }) => {
  const authedUser = useSelector((state: State) => state.authedUser)
  const questions = useSelector((state: State) => state.questions)
  const dispatch = useDispatch()

  const question = questions[id]

  return (
    <PollForm
      question={question}
      answerQuestion={(qid: Question['id'], answer: Answer) => {
        dispatch(answerQuestion.start({ authedUser, qid, answer }))
      }}
    />
  )
}

export default PollFormContainer
