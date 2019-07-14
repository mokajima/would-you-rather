import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading'
import authedUser, { AuthedUserState } from './authedUser'
import users, { UsersState } from './users'
import questions, { QuestionsState } from './questions'

interface LoadingBarState {
  default: number
}

export interface State {
  authedUser: AuthedUserState
  users: UsersState
  questions: QuestionsState
  loadingBar: LoadingBarState
}

export default combineReducers<any>({
  authedUser,
  users,
  questions,
  loadingBar: loadingBarReducer
})
