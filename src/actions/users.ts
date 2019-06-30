import { Users } from '../utils/_DATA'
import * as ActionType from './constants'

interface GetUsersParams {
  users: Users
}

export const getUsers = {
  start: () => ({
    type: ActionType.GET_USERS_START as typeof ActionType.GET_USERS_START
  }),

  succeed: (params: GetUsersParams) => ({
    type: ActionType.GET_USERS_SUCCEED as typeof ActionType.GET_USERS_SUCCEED,
    payload: params
  })
}

export type GetUsersAction =
  | ReturnType<typeof getUsers.start>
  | ReturnType<typeof getUsers.succeed>
