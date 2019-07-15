import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { User } from '../utils/_DATA'
import './Nav.css'

interface NavProps {
  user: User | null
  removeAuthedUser: () => void
}

const Nav: FC<NavProps> = ({ user, removeAuthedUser }) => (
  <>
    {user && (
      <>
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
              onClick={removeAuthedUser}
            >
              Logout
            </li>
          </ul>
        </nav>
        <p>
          Hello, {user.name}{' '}
          <img className="avatar avatar--sm" src={user.avatarURL} alt="" />
        </p>
      </>
    )}
  </>
)

export default Nav
