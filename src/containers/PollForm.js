import { connect } from 'react-redux'
import { handleAnswerQuestion } from '../actions/shared'
import PollForm from '../components/PollForm'

const mapStateToProps = ({ questions }, { id }) => ({
  question: questions[id]
})

const mapDispatchToProps = dispatch => ({
  answerQuestion: (qid, answer) => {
    dispatch(handleAnswerQuestion(qid, answer))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PollForm)
