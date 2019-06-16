import * as ActionType from './constants'

export function receiveUsers(users) {
  return {
    type: ActionType.RECEIVE_USERS,
    users
  }
}
