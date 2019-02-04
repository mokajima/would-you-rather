import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { handleAddQuestion } from '../actions/shared'
import NewQuestion from '../components/NewQuestion'

function mapDispatchToProps(dispatch, ownProps) {
  return {
    addQuestion: (optionOne, optionTwo) => {
      dispatch(handleAddQuestion(optionOne, optionTwo))
      ownProps.history.push('/')
    }
  }
}

export default withRouter(connect(null, mapDispatchToProps)(NewQuestion))
