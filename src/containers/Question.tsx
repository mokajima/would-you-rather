import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { Question as QuestionType } from '../utils/_DATA'
import { State } from '../reducers'
import Question from '../components/Question'

interface QuestionContainerProps {
  id: QuestionType['id']
}

const QuestionContainer: FC<QuestionContainerProps> = ({ id }) => {
  const questions = useSelector((state: State) => state.questions)
  const users = useSelector((state: State) => state.users)

  const question = questions[id]
  const author = users[question.author]

  return <Question question={question} author={author} />
}
export default QuestionContainer
