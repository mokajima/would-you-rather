import React, { Component } from 'react'
import PropTypes from 'prop-types'

class PollForm extends Component {
  state = {
    answer: 'optionOne'
  }

  /**
   * @description Update this.state.answer
   * @param {object} e - The event object
   */
  handleChange = (e) => {
    const target = e.target
    const value = target.value

    this.setState({
      answer: value
    })
  }

  /**
   * @description Dispatch an async action
   * @param {object} e - The event object
   */
  handleSubmit = (e) => {
    e.preventDefault()

    const { id, answerQuestion } = this.props
    const { answer } = this.state

    answerQuestion(id, answer)
  }

  render() {
    const { question } = this.props
    const { answer } = this.state

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
            checked={'optionOne' === answer}
            onChange={this.handleChange}
          />
          {question.optionOne.text}
        </label>
        <label className="label">
          <input
            type="radio"
            className="radio"
            value="optionTwo"
            checked={'optionTwo' === answer}
            onChange={this.handleChange}
          />
          {question.optionTwo.text}
        </label>
        <button
          type="submit"
          className="btn"
          disabled={'' === answer}
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
