import React, { FC } from 'react'
import { Helmet } from 'react-helmet'
import { User } from 'utils/_DATA'
import ScoreCard from 'containers/ScoreCard'

interface LeaderBoardProps {
  userIds: User['id'][]
}

const LeaderBoard: FC<LeaderBoardProps> = ({ userIds }) => (
  <>
    <Helmet>
      <title>Leader Board</title>
    </Helmet>
    <div>
      {userIds.map(id => (
        <ScoreCard id={id} key={id} />
      ))}
    </div>
  </>
)

export default LeaderBoard
