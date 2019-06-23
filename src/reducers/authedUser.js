import * as ActionType from '../actions/constants'

export default function authedUser(state = null, action) {
  switch (action.type) {
    case ActionType.SET_AUTHED_USER :
      return action.payload.id
    case ActionType.REMOVE_AUTHED_USER :
      return null
    default :
      return state
  }
}
