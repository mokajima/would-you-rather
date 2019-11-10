import React, { ChangeEvent, FC, FormEvent, useState } from 'react'
import { Question, Answer } from 'utils/_DATA'
import './index.css'

interface PollFormProps {
  question: Question
  answerQuestion: (qid: Question['id'], answer: Answer) => void
}

const PollForm: FC<PollFormProps> = ({ answerQuestion, question }) => {
  const [answer, setAnswer] = useState<Answer>('optionOne')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value as Answer)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    answerQuestion(question.id, answer)
  }

  return (
    <form className="poll-form" onSubmit={handleSubmit}>
      <p className="poll-form__title">Would You Rather...</p>
      <label className="label" htmlFor="optionOne">
        <input
          id="optionOne"
          type="radio"
          className="radio"
          value="optionOne"
          checked={answer === 'optionOne'}
          onChange={handleChange}
        />
        {question.optionOne.text}
      </label>
      <label className="label" htmlFor="optionTwo">
        <input
          id="optonTwo"
          type="radio"
          className="radio"
          value="optionTwo"
          checked={answer === 'optionTwo'}
          onChange={handleChange}
        />
        {question.optionTwo.text}
      </label>
      <button data-testid="submit" type="submit" className="btn">
        Submit
      </button>
    </form>
  )
}

export default PollForm
