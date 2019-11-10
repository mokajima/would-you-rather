import { Users } from 'utils/_DATA'
import * as ActionType from './constants'

interface GetUsersResult {
  users: Users
}

export const getUsers = {
  start: () => ({
    type: ActionType.GET_USERS_START as typeof ActionType.GET_USERS_START
  }),

  succeed: (result: GetUsersResult) => ({
    type: ActionType.GET_USERS_SUCCEED as typeof ActionType.GET_USERS_SUCCEED,
    payload: { result }
  })
}

export type GetUsersAction =
  | ReturnType<typeof getUsers.start>
  | ReturnType<typeof getUsers.succeed>
