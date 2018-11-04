import React, { Component } from 'react';
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import { removeAuthedUser } from '../actions/authedUser'

class Nav extends Component {
  handleClick = () => {
    this.props.dispatch(removeAuthedUser())
    this.props.history.push('/')
  }

  render() {
    const { user } = this.props

    return (
      <nav>
        <ul>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/add">New Question</NavLink>
          <NavLink to="/leaderboard">Leader Board</NavLink>
        </ul>
        {user && (
          <ul>
            <li>
              Hello, {user.name}
              <img src={user.avatarURL} alt="" />
            </li>
            <li onClick={this.handleClick}>Logout</li>
          </ul>
        )}
      </nav>
    )
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    user: authedUser ? users[authedUser] : null
  }
}

export default withRouter(connect(mapStateToProps)(Nav))
