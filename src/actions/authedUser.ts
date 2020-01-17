import * as ActionType from './constants'

interface SetAuthedUserParams {
  id: string
}

export const setAuthedUser = (params: SetAuthedUserParams) => ({
  type: ActionType.SET_AUTHED_USER as typeof ActionType.SET_AUTHED_USER,
  payload: params
})

export const removeAuthedUser = () => ({
  type: ActionType.REMOVE_AUTHED_USER as typeof ActionType.REMOVE_AUTHED_USER
})

export type authedUserAction =
  | ReturnType<typeof setAuthedUser>
  | ReturnType<typeof removeAuthedUser>
