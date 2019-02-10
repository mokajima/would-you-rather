import { connect } from 'react-redux'
import Question from '../components/Question'

const mapStateToProps = ({ users, questions }, { id }) => {
  const question = questions[id]
  const author = users[question.author]

  return {
    question,
    author
  }
}

export default connect(mapStateToProps)(Question)
