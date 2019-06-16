import { RECEIVE_QUESTIONS } from './constants'

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}
