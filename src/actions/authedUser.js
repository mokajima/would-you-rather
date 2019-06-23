import * as ActionType from './constants'

export function setAuthedUser(params) {
  return {
    type: ActionType.SET_AUTHED_USER,
    payload: params
  }
}

export function removeAuthedUser() {
  return {
    type: ActionType.REMOVE_AUTHED_USER
  }
}
