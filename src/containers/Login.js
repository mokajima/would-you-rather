import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import Login from '../components/Login'

const mapStateToProps = ({ users }) => ({
  users
})

const mapDispatchToProps = dispatch => ({
  setAuthedUser: id => {
    dispatch(setAuthedUser(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
