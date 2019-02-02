import { connect } from 'react-redux'
import { handleAnswerQuestion } from '../actions/shared'
import PollForm from '../components/PollForm'

function mapStateToProps({ questions }, { id }) {
  const question = questions[id]

  return {
    question
  }
}

function mapDispatchToProps(dispatch) {
  return {
    answerQuestion: (qid, answer) => {
      dispatch(handleAnswerQuestion(qid, answer))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PollForm)
