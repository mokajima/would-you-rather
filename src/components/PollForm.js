import React, { useState } from 'react'
import PropTypes from 'prop-types'

const PollForm = ({
  id,
  authedUser,
  answerQuestion,
  question
}) => {
  const [answer, setAnswer] = useState('optionOne')

  const handleChange = e => {
    setAnswer(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    answerQuestion({
      authedUser,
      qid: id,
      answer
    })
  }

  return (
    <form
      className="poll-form"
      onSubmit={handleSubmit}
    >
      <p className="poll-form__title">Would You Rather...</p>
      <label className="label">
        <input
          type="radio"
          className="radio"
          value="optionOne"
          checked={'optionOne' === answer}
          onChange={handleChange}
        />
        {question.optionOne.text}
      </label>
      <label className="label">
        <input
          type="radio"
          className="radio"
          value="optionTwo"
          checked={'optionTwo' === answer}
          onChange={handleChange}
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

PollForm.propTypes = {
  id: PropTypes.string.isRequired,
  question: PropTypes.object.isRequired,
  answerQuestion: PropTypes.func.isRequired,
  authedUser: PropTypes.string.isRequired
}

export default PollForm
