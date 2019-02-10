import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { removeAuthedUser } from '../actions/authedUser'
import Nav from '../components/Nav'

const mapStateToProps = ({ authedUser, users }) => ({
  user: authedUser ? users[authedUser] : null
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  removeAuthedUser: () => {
    dispatch(removeAuthedUser())
    ownProps.history.push('/')
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav))
