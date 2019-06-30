import { Question } from '../utils/_DATA'
import * as ActionType from './constants'

interface GetQuestionParams {
  questions: Question[]
}

export const getQuestions = {
  start: () => ({
    type: ActionType.GET_QUESTIONS_START as typeof ActionType.GET_QUESTIONS_START
  }),

  succeed: (params: GetQuestionParams) => ({
    type: ActionType.GET_QUESTIONS_SUCCEED as typeof ActionType.GET_QUESTIONS_SUCCEED,
    payload: params
  })
}

export type GetQuestionsAction =
  | ReturnType<typeof getQuestions.start>
  | ReturnType<typeof getQuestions.succeed>
