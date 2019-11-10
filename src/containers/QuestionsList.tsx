import React from 'react'
import { useSelector } from 'react-redux'
import { State } from 'reducers'
import QuestionsList from 'components/QuestionsList'

const QuestionsListContainer = () => {
  const authedUser = useSelector((state: State) => state.authedUser)
  const questions = useSelector((state: State) => state.questions)
  const users = useSelector((state: State) => state.users)

  const answers = authedUser ? users[authedUser].answers : {}
  const questionIds = Object.keys(questions)

  const unansweredQuestions = questionIds
    .filter(id => !answers[id])
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp)

  const answeredQuestions = questionIds
    .filter(id => answers[id])
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp)

  return (
    <QuestionsList
      unansweredQuestions={unansweredQuestions}
      answeredQuestions={answeredQuestions}
      questions={questions}
      users={users}
    />
  )
}

export default QuestionsListContainer
