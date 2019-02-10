import { connect } from 'react-redux'
import Poll from '../components/Poll'

const mapStateToProps = ({ authedUser, users, questions }, ownProps) => {
  const { id } = ownProps.match.params
  const question = questions[id]
  const author = question ? users[question.author] : null
  const answer = authedUser ? users[authedUser].answers[id] : null

  return {
    question,
    author,
    answer,
    id
  }
}

export default connect(mapStateToProps)(Poll)
