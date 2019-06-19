import * as ActionType from './constants'

export const addQuestion = {
  start: params => ({
    type: ActionType.ADD_QUESTION_START,
    payload: params
  }),

  succeed: params => ({
    type: ActionType.ADD_QUESTION_SUCCEED,
    payload: params
  })
}

export const answerQuestion = {
  start: params => ({
    type: ActionType.ANSWER_QUESTION_START,
    payload: params
  }),

  succeed: params => ({
    type: ActionType.ANSWER_QUESTION_SUCCEED,
    payload: params
  })
}
