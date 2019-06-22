import { connect } from 'react-redux'
import Data from '../components/Data'

const mapStateToProps = ({ authedUser, users, questions }, { id, option }) => {
  const question = questions[id]
  const answer = users[authedUser].answers[id]
  const selected = option === answer
  const total = question.optionOne.votes.length + question.optionTwo.votes.length
  const rate = 100 * question[option].votes.length / total

  return {
    question,
    option,
    selected,
    total,
    rate
  }
}

export default connect(mapStateToProps)(Data)
