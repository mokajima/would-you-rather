import React, { FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { State } from '../reducers'
import { removeAuthedUser } from '../actions/authedUser'
import Nav from '../components/Nav'

type NavContainerProps = {} & RouteComponentProps<{}>

const NavContainer: FC<NavContainerProps> = ({ history }) => {
  const authedUser = useSelector((state: State) => state.authedUser)
  const users = useSelector((state: State) => state.users)
  const user = authedUser ? users[authedUser] : null
  const dispatch = useDispatch()

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

export default withRouter(NavContainer)
