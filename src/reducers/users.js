import * as ActionType from '../actions/constants'

export default function users(state = {}, action) {
  switch (action.type) {
    case ActionType.RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
    case ActionType.ADD_QUESTION : {
      const { question } = action

      return {
        ...state,
        [question.author]: {
          ...state[question.author],
          questions: state[question.author].questions.concat([question.id])
        }
      }
    }
    case ActionType.ANSWER_QUESTION : {
      const { authedUser } = action
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [action.qid]: action.answer
          }
        }
      }
    }
    default :
      return state
  }
}
