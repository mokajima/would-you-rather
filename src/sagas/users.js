import { call, put, takeEvery } from 'redux-saga/effects'
import { showLoading, hideLoading } from 'react-redux-loading'

import { _getUsers } from '../utils/_DATA'
import * as ActionType from '../actions/constants'
import { getUsers } from '../actions/users'

export function* runGetUsers() {
  yield put(showLoading())
  const users = yield call(_getUsers)
  yield put(getUsers.succeed({ users }))
  yield put(hideLoading())
}

export function* watchGetUsers() {
  yield takeEvery(ActionType.GET_USERS_START, runGetUsers)
}
