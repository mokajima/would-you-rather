import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

class Login extends Component {
  state = {
    user: ''
  }

  /**
   * @description Update this.state.user
   * @param {object} e - The event object
   */
  handleChange = (e) => {
    const target = e.target
    const value = target.value

    this.setState({
      user: value
    })
  }

  /**
   * @description Dispatch SET_AUTHED_USER action
   * @param {object} e - The event object
   */
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.setAuthedUser(this.state.user)
  }

  render() {
    const { users } = this.props
    const { user } = this.state

    return (
      <>
        <Helmet>
          <title>Login | Would You Rather?</title>
        </Helmet>
        <div className="login-form container">
          <header className="login-form__header">
            <h2 className="login-form__title">Welcome to the Would You Rather App!</h2>
            <p className="login-form__desc">Please sign in to continue</p>
          </header>
          <form
            className="login-form__form"
            onSubmit={this.handleSubmit}
          >
            <select
              className="select"
              value={user}
              onChange={this.handleChange}
            >
              <option value="">Select User</option>
              {Object.keys(users).map((id) => (
                <option key={id} value={id}>
                  {users[id].name}
                </option>
              ))}
            </select>
            <button
              type="submit"
              className="btn"
              disabled={'' === user}
            >
              Submit
            </button>
          </form>
        </div>
      </>
    )
  }
}

Login.propTypes = {
  users: PropTypes.object.isRequired,
  setAuthedUser: PropTypes.func.isRequired
}

export default Login
