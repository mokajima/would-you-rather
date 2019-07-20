import { Questions } from '../utils/_DATA'
import * as ActionType from '../actions/constants'
import { AddQuestionAction, AnswerQuestionAction } from '../actions/shared'
import { GetQuestionsAction } from '../actions/questions'

export type QuestionsState = Questions

export const questionsInitialState = {}

type QuestionsAction =
  | AddQuestionAction
  | AnswerQuestionAction
  | GetQuestionsAction

export default function questions(
  state: QuestionsState = questionsInitialState,
  action: QuestionsAction
) {
  switch (action.type) {
    case ActionType.GET_QUESTIONS_SUCCEED:
      return {
        ...state,
        ...action.payload.questions
      }
    case ActionType.ADD_QUESTION_SUCCEED: {
      const { question } = action.payload

      return {
        ...state,
        [question.id]: question
      }
    }
    case ActionType.ANSWER_QUESTION_SUCCEED: {
      const { authedUser, qid, answer } = action.payload

      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([authedUser])
          }
        }
      }
    }
    default:
      return state
  }
}
