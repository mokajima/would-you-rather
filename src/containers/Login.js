import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import Login from '../components/Login'

function mapStateToProps({ users }) {
  return {
    users
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setAuthedUser: id => {
      dispatch(setAuthedUser(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
