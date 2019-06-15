import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import ScoreCard from '../containers/ScoreCard'

const LeaderBoard = ({ userIds }) => (
  <>
    <Helmet>
      <title>Leader Board | Would You Rather?</title>
    </Helmet>
    <div>
      {userIds.map((id) => (
        <ScoreCard id={id} key={id} />
      ))}
    </div>
  </>
)

LeaderBoard.propTypes = {
  userIds: PropTypes.array.isRequired
}

export default LeaderBoard
