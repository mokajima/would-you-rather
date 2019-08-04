import { Users } from '../utils/_DATA'
import * as ActionType from '../actions/constants'
import { AddQuestionAction, AnswerQuestionAction } from '../actions/shared'
import { GetUsersAction } from '../actions/users'

export type UsersState = Users

export const usersInitialState = {}

type UsersAction = AddQuestionAction | AnswerQuestionAction | GetUsersAction

export default function users(
  state: UsersState = usersInitialState,
  action: UsersAction
) {
  switch (action.type) {
    case ActionType.GET_USERS_SUCCEED:
      return {
        ...state,
        ...action.payload.result.users
      }
    case ActionType.ADD_QUESTION_SUCCEED: {
      const { question } = action.payload.result

      return {
        ...state,
        [question.author]: {
          ...state[question.author],
          questions: state[question.author].questions.concat([question.id])
        }
      }
    }
    case ActionType.ANSWER_QUESTION_SUCCEED: {
      const { authedUser, qid, answer } = action.payload.params

      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer
          }
        }
      }
    }
    default:
      return state
  }
}
