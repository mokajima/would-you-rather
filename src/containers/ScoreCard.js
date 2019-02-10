import { connect } from 'react-redux'
import ScoreCard from '../components/ScoreCard'

const mapStateToProps = ({ users }, { id }) => ({
  user: users[id]
})

export default connect(mapStateToProps)(ScoreCard)
