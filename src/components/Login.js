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
      <div>
        <div>
          <span>Welcome to the Would You Rather App!</span>
          <span>Please sign in to continue</span>
        </div>
        <form onSubmit={this.handleSubmit}>
          <select onChange={this.handleChange}>
            <option value="">Select User</option>
            {Object.keys(users).map((id) => (
              <option
                key={id}
                value={id}
                selected={id === selected}
              >
                {users[id].name}
              </option>
            ))}
          </select>
          <button
            type="submit"
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
