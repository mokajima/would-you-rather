import * as ActionType from '../actions/constants'

export default function questions(state = {}, action) {
  switch (action.type) {
    case ActionType.RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
    case ActionType.ADD_QUESTION :
      return {
        ...state,
        [action.question.id]: action.question
      }
    case ActionType.ANSWER_QUESTION : {
      const { authedUser, qid, answer } = action
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
