import * as ActionType from '../actions/constants'

export default function questions(state = {}, action) {
  switch (action.type) {
    case ActionType.GET_QUESTIONS_SUCCEED :
      return {
        ...state,
        ...action.payload.questions
      }
    case ActionType.ADD_QUESTION_SUCCEED : {
      const { question } = action.payload
      return {
        ...state,
        [question.id]: question
      }
    }
    case ActionType.ANSWER_QUESTION_SUCCEED : {
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
    default :
      return state
  }
}
