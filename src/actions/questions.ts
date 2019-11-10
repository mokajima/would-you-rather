import { Questions } from 'utils/_DATA'
import * as ActionType from './constants'

interface GetQuestionResult {
  questions: Questions
}

export const getQuestions = {
  start: () => ({
    type: ActionType.GET_QUESTIONS_START as typeof ActionType.GET_QUESTIONS_START
  }),

  succeed: (result: GetQuestionResult) => ({
    type: ActionType.GET_QUESTIONS_SUCCEED as typeof ActionType.GET_QUESTIONS_SUCCEED,
    payload: { result }
  })
}

export type GetQuestionsAction =
  | ReturnType<typeof getQuestions.start>
  | ReturnType<typeof getQuestions.succeed>
