import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { removeAuthedUser } from '../actions/authedUser'

class Nav extends Component {

  /**
   * @description Dispatch REMOVE_AUTHED_USER action
   */
  handleClick = () => {
    this.props.dispatch(removeAuthedUser())
    this.props.history.push('/')
  }

  render() {
    const { user } = this.props

    return (
      <Fragment>
        {user && (
          <Fragment>
            <nav className="nav">
              <ul className="nav__list">
                <li className="nav__list-item">
                  <NavLink to="/add">New Question</NavLink>
                </li>
                <li className="nav__list-item">
                  <NavLink to="/leaderboard">Leader Board</NavLink>
                </li>
                <li
                  className="nav__list-item nav__list-item--logout"
                  onClick={this.handleClick}>
                  Logout
                </li>
              </ul>
            </nav>
            <p>
              Hello, {user.name} <img className="avatar avatar--sm" src={user.avatarURL} alt="" />
            </p>
          </Fragment>
        )}
      </Fragment>
    )
  }
}

Nav.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  user: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.oneOf([null]).isRequired
  ])
}

function mapStateToProps({ authedUser, users }) {
  return {
    user: authedUser ? users[authedUser] : null
  }
}

export default withRouter(connect(mapStateToProps)(Nav))
