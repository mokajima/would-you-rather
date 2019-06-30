import * as ActionType from './constants'

interface setAuthedUserParams {
  id: string
}

export function setAuthedUser(params: setAuthedUserParams) {
  return {
    type: ActionType.SET_AUTHED_USER as typeof ActionType.SET_AUTHED_USER,
    payload: params
  }
}

export function removeAuthedUser() {
  return {
    type: ActionType.REMOVE_AUTHED_USER as typeof ActionType.REMOVE_AUTHED_USER
  }
}

export type authedUserAction =
  | ReturnType<typeof setAuthedUser>
  | ReturnType<typeof removeAuthedUser>
