import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { removeAuthedUser } from '../actions/authedUser'
import Nav from '../components/Nav'

function mapStateToProps({ authedUser, users }) {
  return {
    user: authedUser ? users[authedUser] : null
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    removeAuthedUser: () => {
      dispatch(removeAuthedUser())
      ownProps.history.push('/')
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav))
