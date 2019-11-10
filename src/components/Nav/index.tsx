import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { User } from 'utils/_DATA'
import './index.css'

interface NavProps {
  user: User | null
  removeAuthedUser: () => void
}

const Nav: FC<NavProps> = ({ user, removeAuthedUser }) => (
  <>
    {user && (
      <>
        <nav data-testid="nav" className="nav">
          <ul className="nav__list">
            <li data-testid="add" className="nav__list-item">
              <NavLink to="/add">New Question</NavLink>
            </li>
            <li data-testid="leaderboard" className="nav__list-item">
              <NavLink to="/leaderboard">Leader Board</NavLink>
            </li>
            <li
              data-testid="logout"
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
