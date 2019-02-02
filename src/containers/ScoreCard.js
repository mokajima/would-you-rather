import { connect } from 'react-redux'
import ScoreCard from '../components/ScoreCard'

function mapStateToProps({ users }, { id }) {
  return {
    user: users[id]
  }
}

export default connect(mapStateToProps)(ScoreCard)
