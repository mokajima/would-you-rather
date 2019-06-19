import * as ActionType from '../actions/constants'

export default function users(state = {}, action) {
  switch (action.type) {
    case ActionType.GET_USERS_SUCCEED :
      return {
        ...state,
        ...action.payload.users
      }
    case ActionType.ADD_QUESTION_SUCCEED : {
      const { question } = action.payload
      return {
        ...state,
        [question.author]: {
          ...state[question.author],
          questions: state[question.author].questions.concat([question.id])
        }
      }
    }
    case ActionType.ANSWER_QUESTION_SUCCEED : {
      const { authedUser, qid, answer } = action.payload
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
    default :
      return state
  }
}
