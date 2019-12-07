import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { State } from 'reducers'
import { Answer, Question } from 'utils/_DATA'
import { answerQuestion } from 'actions/shared'
import Poll from 'components/Poll'

const PollContainer: FC = () => {
  const authedUser = useSelector((state: State) => state.authedUser)
  const users = useSelector((state: State) => state.users)
  const questions = useSelector((state: State) => state.questions)
  const dispatch = useDispatch()
  const { id } = useParams<{ id: string }>()

  const question = questions[id]
  const author = question ? users[question.author] : null

  return (
    <Poll
      question={question}
      author={author}
      answer={authedUser ? users[authedUser].answers[id] : null}
      answerQuestion={(qid: Question['id'], answer: Answer) => {
        dispatch(answerQuestion.start({ authedUser, qid, answer }))
      }}
    />
  )
}

export default PollContainer
