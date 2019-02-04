import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

class Login extends Component {
  state = {
    selected: ''
  }

  /**
   * @description Update this.state.selected
   * @param {object} e - The event object
   */
  handleChange = (e) => {
    const target = e.target
    const value = target.value

    this.setState({
      selected: value
    })
  }

  /**
   * @description Dispatch SET_AUTHED_USER action
   * @param {object} e - The event object
   */
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.setAuthedUser(this.state.selected)
  }

  render() {
    const { users } = this.props
    const { selected } = this.state

    return (
      <div className="login-form container">
        <Helmet>
          <title>Login | Would You Rather?</title>
        </Helmet>
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
            value={selected}
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
            disabled={'' === selected}
          >
            Submit
          </button>
        </form>
      </div>
    )
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  users: PropTypes.object.isRequired
}

export default Login
