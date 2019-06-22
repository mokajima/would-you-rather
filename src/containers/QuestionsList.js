import React from 'react'
import { useSelector } from 'react-redux'
import QuestionsList from '../components/QuestionsList'

const QuestionsListContainer = () => {
  const authedUser = useSelector(state => state.authedUser)
  const questions = useSelector(state => state.questions)
  const users = useSelector(state => state.users)

  const answers = authedUser ? users[authedUser].answers : {}
  const questionIds = Object.keys(questions)

  const unansweredQuestions = questionIds
    .filter(id => !answers.hasOwnProperty(id))
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp)

  const answeredQuestions = questionIds
    .filter(id => answers.hasOwnProperty(id))
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp)

  return (
    <QuestionsList
      unansweredQuestions={unansweredQuestions}
      answeredQuestions={answeredQuestions}
    />
  )
}

export default QuestionsListContainer
