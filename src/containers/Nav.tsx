import React, { FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { State } from '../reducers'
import { removeAuthedUser } from '../actions/authedUser'
import Nav from '../components/Nav'

const NavContainer: FC = () => {
  const authedUser = useSelector((state: State) => state.authedUser)
  const users = useSelector((state: State) => state.users)
  const user = authedUser ? users[authedUser] : null
  const dispatch = useDispatch()
  const history = useHistory()

  return (
    <Nav
      user={user}
      removeAuthedUser={() => {
        dispatch(removeAuthedUser())
        history.push('/')
      }}
    />
  )
}

export default NavContainer
