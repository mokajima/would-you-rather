import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { answerQuestion } from '../actions/shared'
import PollForm from '../components/PollForm'

const PollFormContainer = ({ id }) => {
  const authedUser = useSelector(state => state.authedUser)
  const questions = useSelector(state => state.questions)
  const dispatch = useDispatch()

  const question = questions[id]

  return (
    <PollForm
      question={question}
      answerQuestion={params => dispatch(answerQuestion.start({ authedUser, ...params }))}
      id={id}
    />
  )
}

export default PollFormContainer
