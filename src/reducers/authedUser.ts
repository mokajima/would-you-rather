import { User } from '../utils/_DATA'
import * as ActionType from '../actions/constants'
import { authedUserAction } from '../actions/authedUser'

export type AuthedUserState = User['id']

export default function authedUser(state: AuthedUserState = '', action: authedUserAction) {
  switch (action.type) {
    case ActionType.SET_AUTHED_USER:
      return action.payload.id
    case ActionType.REMOVE_AUTHED_USER:
      return ''
    default:
      return state
  }
}
