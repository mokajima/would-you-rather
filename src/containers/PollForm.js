import { connect } from 'react-redux'
import { answerQuestion } from '../actions/shared'
import PollForm from '../components/PollForm'

const mapStateToProps = ({ authedUser, questions }, { id }) => ({
  authedUser,
  question: questions[id]
})

const mapDispatchToProps = dispatch => ({
  answerQuestion: params => {
    dispatch(answerQuestion.start(params))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PollForm)
