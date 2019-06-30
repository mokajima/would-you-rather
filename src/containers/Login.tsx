import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { State } from '../reducers'
import { User } from '../utils/_DATA'
import { setAuthedUser } from '../actions/authedUser'
import Login from '../components/Login'

const LoginContainer = () => {
  const users = useSelector((state: State) => state.users)
  const dispatch = useDispatch()

  return (
    <Login
      users={users}
      setAuthedUser={(id: User['id']) => dispatch(setAuthedUser({ id }))}
    />
  )
}

export default LoginContainer
