import React from 'react'
import { useSelector } from 'react-redux'
import Question from '../components/Question'

const QuestionContainer = ({ id }) => {
  const questions = useSelector(state => state.questions)
  const users = useSelector(state => state.users)

  const question = questions[id]
  const author = users[question.author]

  return (
    <Question
      question={question}
      author={author}
      id={id}
    />
  )
}
export default QuestionContainer
