import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading'
import authedUser, {
  AuthedUserState,
  authedUserInitialState
} from './authedUser'
import users, { UsersState, usersInitialState } from './users'
import questions, { QuestionsState, questionsInitialState } from './questions'

interface LoadingBarState {
  default: number
}

const LoadingBarInitialState = { default: 0 }

export interface State {
  authedUser: AuthedUserState
  users: UsersState
  questions: QuestionsState
  loadingBar: LoadingBarState
}

export const initialState = {
  authedUser: authedUserInitialState,
  users: usersInitialState,
  questions: questionsInitialState,
  loadingBar: LoadingBarInitialState
}

export default combineReducers<State>({
  authedUser,
  users,
  questions,
  loadingBar: loadingBarReducer
})
