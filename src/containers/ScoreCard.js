import React from 'react'
import { useSelector } from 'react-redux'
import ScoreCard from '../components/ScoreCard'

const ScoreCardContainer = ({ id }) => {
  const users = useSelector(state => state.users)

  const user = users[id]
  const answeredQuestions = Object.keys(user.answers).length
  const createdQuestions = user.questions.length
  const score = answeredQuestions + createdQuestions

  return (
    <ScoreCard
      user={user}
      answeredQuestions={answeredQuestions}
      createdQuestions={createdQuestions}
      score={score}
    />
  )
}

export default ScoreCardContainer
