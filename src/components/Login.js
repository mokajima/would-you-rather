import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {
  state = {
    selected: ''
  }

  handleChange = (e) => {
    const target = e.target
    const value = target.value

    this.setState({
      selected: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.dispatch(setAuthedUser(this.state.selected))
  }

  render() {
    const { users } = this.props
    const { selected } = this.state

    return (
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

function mapStateToProps({ users }) {
  return {
    users
  }
}

export default connect(mapStateToProps)(Login)
