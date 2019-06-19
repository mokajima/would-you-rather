import * as ActionType from './constants'

export const getUsers = {
  start: () => ({
    type: ActionType.GET_USERS_START
  }),

  succeed: params => ({
    type: ActionType.GET_USERS_SUCCEED,
    payload: params
  })
}
