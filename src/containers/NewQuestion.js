import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { handleAddQuestion } from '../actions/shared'
import NewQuestion from '../components/NewQuestion'

const mapDispatchToProps = (dispatch, ownProps) => ({
  addQuestion: (optionOne, optionTwo) => {
    dispatch(handleAddQuestion(optionOne, optionTwo))
    ownProps.history.push('/')
  }
})

export default withRouter(connect(null, mapDispatchToProps)(NewQuestion))
