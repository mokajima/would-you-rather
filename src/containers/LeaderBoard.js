import { connect } from 'react-redux'
import LeaderBoard from '../components/LeaderBoard'

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
