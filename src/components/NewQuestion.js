import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import './NewQuestion.css'

const NewQuestion = ({ authedUser, addQuestion }) => {
  const [optionOne, setOptionOne] = useState('')
  const [optionTwo, setOptionTwo] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    addQuestion({
      author: authedUser,
      optionOneText: optionOne,
      optionTwoText: optionTwo
    })
  }

  return (
    <>
      <Helmet>
        <title>Create New Question | Would You Rather?</title>
      </Helmet>
      <div className="new-question">
        <h2 className="new-question__title">Create New Question</h2>
        <form
          className="new-question__form"
          onSubmit={handleSubmit}
        >
          <p>Would you rather...</p>
          <input
            type="text"
            className="input"
            name="optionOne"
            placeholder="Enter Option One Text Here"
            value={optionOne}
            onChange={e => setOptionOne(e.target.value)}
          />
          <hr />
          <input
            type="text"
            className="input"
            name="optionTwo"
            placeholder="Enter Option Two Text Here"
            value={optionTwo}
            onChange={e => setOptionTwo(e.target.value)}
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
    </>
  )
}

NewQuestion.propTypes = {
  authedUser: PropTypes.string.isRequired,
  addQuestion: PropTypes.func.isRequired
}

export default NewQuestion
