import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import ScoreCard from './ScoreCard'

function LeaderBoard(props) {
  return (
    <div>
      <Helmet>
        <title>Leader Board | Would You Rather?</title>
      </Helmet>
      {props.userIds.map((id) => (
        <ScoreCard id={id} key={id} />
      ))}
    </div>
  )
}

LeaderBoard.propTypes = {
  userIds: PropTypes.array.isRequired
}

export default LeaderBoard
