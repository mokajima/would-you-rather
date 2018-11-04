import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { handleAddQuestion } from '../actions/shared'

class NewQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: ''
  }

  handleChange = (e) => {
    const target = e.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { optionOne, optionTwo } = this.state

    this.props.dispatch(handleAddQuestion(optionOne, optionTwo))

    this.setState({
      optionOne: '',
      optionTwo: ''
    })

    this.props.history.push('/')
  }

  render() {
    const { optionOne, optionTwo } = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="optionOne"
          placeholder="Enter Option One Text Here"
          value={optionOne}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="optionTwo"
          placeholder="Enter Option Two Text Here"
          value={optionTwo}
          onChange={this.handleChange}
        />
        <button
          type="submit"
          disabled={'' === optionOne || '' === optionTwo}
        >
          Submit
        </button>
      </form>
    )
  }
}

export default withRouter(connect()(NewQuestion))
