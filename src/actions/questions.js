import * as ActionType from './constants'

export const getQuestions = {
  start: () => ({
    type: ActionType.GET_QUESTIONS_START
  }),

  succeed: params => ({
    type: ActionType.GET_QUESTIONS_SUCCEED,
    payload: params
  })
}
