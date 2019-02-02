import React, { Component } from 'react'
import PropTypes from 'prop-types'

class PollForm extends Component {
  state = {
    checked: 'optionOne'
  }

  /**
   * @description Update this.state.checked
   * @param {object} e - The event object
   */
  handleChange = (e) => {
    const target = e.target
    const value = target.value

    this.setState({
      checked: value
    })
  }

  /**
   * @description Dispatch an async action
   * @param {object} e - The event object
   */
  handleSubmit = (e) => {
    e.preventDefault()

    const { id, answerQuestion } = this.props
    const { checked } = this.state

    answerQuestion(id, checked)
  }

  render() {
    const { question } = this.props
    const { checked } = this.state

    return (
      <form
        className="poll-form"
        onSubmit={this.handleSubmit}
      >
        <p className="poll-form__title">Would You Rather...</p>
        <label className="label">
          <input
            type="radio"
            className="radio"
            value="optionOne"
            checked={'optionOne' === checked}
            onChange={this.handleChange}
          />
          {question.optionOne.text}
        </label>
        <label className="label">
          <input
            type="radio"
            className="radio"
            value="optionTwo"
            checked={'optionTwo' === checked}
            onChange={this.handleChange}
          />
          {question.optionTwo.text}
        </label>
        <button
          type="submit"
          className="btn"
          disabled={'' === checked}
        >
          Submit
        </button>
      </form>
    )
  }
}

PollForm.propTypes = {
  id: PropTypes.string.isRequired,
  question: PropTypes.object.isRequired,
  answerQuestion: PropTypes.func.isRequired
}

export default PollForm
