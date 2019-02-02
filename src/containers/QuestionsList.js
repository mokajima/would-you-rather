import { connect } from 'react-redux'
import QuestionsList from '../components/QuestionsList'

function mapStateToProps({ authedUser, users, questions }) {
  const answers = authedUser ? users[authedUser].answers : {}
  const questionIds = Object.keys(questions)

  const unansweredQuestions = questionIds.filter((id) => !answers.hasOwnProperty(id))
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp)

  const answeredQuestions = questionIds.filter((id) => answers.hasOwnProperty(id))
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp)

  return {
    unansweredQuestions,
    answeredQuestions
  }
}

export default connect(mapStateToProps)(QuestionsList)
