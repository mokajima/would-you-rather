import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { handleAddQuestion } from '../actions/shared'

class NewQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: ''
  }

  /**
   * @description Update this.state
   * @param {object} e - The event object
   */
  handleChange = (e) => {
    const target = e.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  /**
   * @description Dispatch an async action
   * @param {object} e - The event object
   */
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
      <div className="new-question">
        <h2 className="new-question__title">Create New Question</h2>
        <form
          className="new-question__form"
          onSubmit={this.handleSubmit}
        >
          <p>Would you rather...</p>
          <input
            type="text"
            className="input"
            name="optionOne"
            placeholder="Enter Option One Text Here"
            value={optionOne}
            onChange={this.handleChange}
          />
          <hr />
          <input
            type="text"
            className="input"
            name="optionTwo"
            placeholder="Enter Option Two Text Here"
            value={optionTwo}
            onChange={this.handleChange}
          />
          <button
            type="submit"
            className="new-question__btn btn"
            disabled={'' === optionOne || '' === optionTwo}
          >
            Submit
          </button>
        </form>
      </div>
    )
  }
}

NewQuestion.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
}

export default withRouter(connect()(NewQuestion))
