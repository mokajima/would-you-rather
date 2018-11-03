import { RECEIVE_USERS } from '../actions/users'
import { ADD_QUESTION, ANSWER_QUESTION } from '../actions/shared'

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
    case ADD_QUESTION :
      const { question } = action

      return {
        ...state,
        [question.author]: {
          ...state[question.author],
          questions: state[question.author].questions.concat([question.id])
        }
      }
    case ANSWER_QUESTION :
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
    default :
      return state
  }
}
