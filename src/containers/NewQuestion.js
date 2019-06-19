import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { addQuestion } from '../actions/shared'
import NewQuestion from '../components/NewQuestion'

const mapStateToProps = ({ authedUser }) => ({
  authedUser
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  addQuestion: params => {
    dispatch(addQuestion.start(params))
    ownProps.history.push('/')
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewQuestion))
