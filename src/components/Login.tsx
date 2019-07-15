import React, { ChangeEvent, FC, FormEvent, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Users, User } from '../utils/_DATA'
import './Login.css'

interface LoginProps {
  users: Users
  setAuthedUser: (id: User['id']) => void
}

const Login: FC<LoginProps> = ({ users, setAuthedUser }) => {
  const [user, setUser] = useState('')

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setUser(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setAuthedUser(user)
  }

  return (
    <>
      <Helmet>
        <title>Login | Would You Rather?</title>
      </Helmet>
      <div className="login-form container">
        <header className="login-form__header">
          <h2 className="login-form__title">
            Welcome to the Would You Rather App!
          </h2>
          <p className="login-form__desc">Please sign in to continue</p>
        </header>
        <form className="login-form__form" onSubmit={handleSubmit}>
          <select className="select" value={user} onChange={handleChange}>
            <option value="">Select User</option>
            {Object.keys(users).map(id => (
              <option key={id} value={id}>
                {users[id].name}
              </option>
            ))}
          </select>
          <button type="submit" className="btn" disabled={user === ''}>
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default Login
