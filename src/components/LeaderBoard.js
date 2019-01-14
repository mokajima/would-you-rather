import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ScoreCard from './ScoreCard'

function LeaderBoard(props) {
  return (
    <div>
      {props.userIds.map((id) => (
        <ScoreCard id={id} key={id} />
      ))}
    </div>
  )
}

LeaderBoard.propTypes = {
  userIds: PropTypes.array.isRequired
}

function mapStateToProps({ users }) {
  return {
    userIds: Object.keys(users)
      .sort((a, b) => {
        const scoreA = Object.keys(users[a].answers).length + users[a].questions.length
        const scoreB = Object.keys(users[b].answers).length + users[b].questions.length

        return scoreB - scoreA
      })
  }
}

export default connect(mapStateToProps)(LeaderBoard)
