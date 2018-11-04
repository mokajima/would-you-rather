import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleAnswerQuestion } from '../actions/shared'

class PollForm extends Component {
  state = {
    checked: 'optionOne'
  }

  handleChange = (e) => {
    const target = e.target
    const value = target.value

    this.setState({
      checked: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.dispatch(handleAnswerQuestion(this.props.id, this.state.checked))
  }

  render() {
    const { question } = this.props
    const { checked } = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
            type="radio"
            value="optionOne"
            checked={'optionOne' === checked}
            onChange={this.handleChange}
          />
          {question.optionOne.text}
        </label>
        <label>
          <input
            type="radio"
            value="optionTwo"
            checked={'optionTwo' === checked}
            onChange={this.handleChange}
          />
          {question.optionTwo.text}
        </label>
        <button
          type="submit"
          disabled={'' === checked}
        >
          Submit
        </button>
      </form>
    )
  }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id]

  return {
    question
  }
}

export default connect(mapStateToProps)(PollForm)
