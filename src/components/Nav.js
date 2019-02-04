import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

function Nav(props) {
  const { user, removeAuthedUser } = props

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
                onClick={removeAuthedUser}>
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

Nav.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.oneOf([null]).isRequired
  ])
}

export default Nav
