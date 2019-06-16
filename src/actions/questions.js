import * as ActionType from './constants'

export function receiveQuestions(questions) {
  return {
    type: ActionType.RECEIVE_QUESTIONS,
    questions
  }
}
