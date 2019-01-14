import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { handleAnswerQuestion } from '../actions/shared'

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

    this.props.dispatch(handleAnswerQuestion(this.props.id, this.state.checked))
  }

  render() {
    const { question } = this.props
    const { checked } = this.state

    return (
      <form
        className="poll-form"
        onSubmit={this.handleSubmit}
      >
        <p class="poll-form__title">Would You Rather...</p>
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
  dispatch: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  question: PropTypes.object.isRequired
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id]

  return {
    question
  }
}

export default connect(mapStateToProps)(PollForm)
