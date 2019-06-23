import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import Login from '../components/Login'

const LoginContainer = () => {
  const users = useSelector(state => state.users)
  const dispatch = useDispatch()

  return (
    <Login
      users={users}
      setAuthedUser={params => dispatch(setAuthedUser(params))}
    />
  )
}

export default LoginContainer
