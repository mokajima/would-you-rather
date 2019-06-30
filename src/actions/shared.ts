import { Question, User, Answer } from '../utils/_DATA'
import * as ActionType from './constants'

interface AddQuestionParams {
  question: Question
}

interface AnswerQuestionParams {
  authedUser: User['id']
  qid: Question['id']
  answer: Answer
}

export const addQuestion = {
  start: (params: AddQuestionParams) => ({
    type: ActionType.ADD_QUESTION_START as typeof ActionType.ADD_QUESTION_START,
    payload: params
  }),

  succeed: (params: AddQuestionParams) => ({
    type: ActionType.ADD_QUESTION_SUCCEED as typeof ActionType.ADD_QUESTION_SUCCEED,
    payload: params
  })
}

export const answerQuestion = {
  start: (params: AnswerQuestionParams) => ({
    type: ActionType.ANSWER_QUESTION_START as typeof ActionType.ANSWER_QUESTION_START,
    payload: params
  }),

  succeed: (params: AnswerQuestionParams) => ({
    type: ActionType.ANSWER_QUESTION_SUCCEED as typeof ActionType.ANSWER_QUESTION_SUCCEED,
    payload: params
  })
}

export type AddQuestionAction =
  | ReturnType<typeof addQuestion.start>
  | ReturnType<typeof addQuestion.succeed>

export type AnswerQuestionAction =
  | ReturnType<typeof answerQuestion.start>
  | ReturnType<typeof answerQuestion.succeed>
