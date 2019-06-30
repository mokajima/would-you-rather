import React from 'react'
import { useSelector } from 'react-redux'
import { State } from '../reducers'
import LeaderBoard from '../components/LeaderBoard'

const LeaderBoardContainer = () => {
  const users = useSelector((state: State) => state.users)
  const userIds = Object.keys(users)
    .sort((a, b) => {
      const scoreA = Object.keys(users[a].answers).length + users[a].questions.length
      const scoreB = Object.keys(users[b].answers).length + users[b].questions.length

      return scoreB - scoreA
    })

  return (
    <LeaderBoard userIds={userIds} />
  )
}

export default LeaderBoardContainer
