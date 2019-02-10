import { connect } from 'react-redux'
import Data from '../components/Data'

const mapStateToProps = ({ authedUser, users, questions }, { id, option }) => {
  const question = questions[id]
  const answer = users[authedUser].answers[id]

  return {
    question,
    answer,
    option
  }
}

export default connect(mapStateToProps)(Data)
