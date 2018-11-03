import { _getUsers, _getQuestions } from '../utils/_DATA'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { setAuthedUser } from '../actions/authedUser'

export const ADD_QUESTION = 'ADD_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

export function handleInitialData() {
  return (dispatch) => {
    return Promise.all([
      _getUsers(),
      _getQuestions()
    ])
      .then(([users, questions]) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(setAuthedUser('sarahedo'))
      })
  }
}
