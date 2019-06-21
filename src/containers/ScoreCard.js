import { connect } from 'react-redux'
import ScoreCard from '../components/ScoreCard'

const mapStateToProps = ({ users }, { id }) => {
  const user = users[id]
  const answeredQuestions = Object.keys(user.answers).length
  const createdQuestions = user.questions.length
  const score = answeredQuestions + createdQuestions

  return {
    user,
    answeredQuestions,
    createdQuestions,
    score
  }
}

export default connect(mapStateToProps)(ScoreCard)
