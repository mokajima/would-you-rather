import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { User } from '../utils/_DATA'
import { State } from '../reducers'
import ScoreCard from '../components/ScoreCard'

interface ScoreCardContainerProps {
  id: User['id']
}

const ScoreCardContainer: FC<ScoreCardContainerProps> = ({ id }) => {
  const users = useSelector((state: State) => state.users)

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
