import * as ActionType from './constants'

export function setAuthedUser(id) {
  return {
    type: ActionType.SET_AUTHED_USER,
    id
  }
}

export function removeAuthedUser() {
  return {
    type: ActionType.REMOVE_AUTHED_USER
  }
}
