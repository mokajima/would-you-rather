import React from 'react';
import { connect } from 'react-redux'
import { removeAuthedUser } from '../actions/authedUser'

function Nav(props) {
  const { user } = props

  return (
    <nav>
      {user && (
        <ul>
          <li>
            Hello, {user.name}
            <img src={user.avatarURL} alt="" />
          </li>
          <li onClick={() => props.dispatch(removeAuthedUser())}>Logout</li>
        </ul>
      )}
    </nav>
  )
}

function mapStateToProps({ authedUser, users }) {
  return {
    user: authedUser ? users[authedUser] : null
  }
}

export default connect(mapStateToProps)(Nav)
