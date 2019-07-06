import { call, put, takeLatest } from 'redux-saga/effects'
import { showLoading, hideLoading } from 'react-redux-loading'

import { _getUsers } from '../utils/_DATA'
import * as ActionType from '../actions/constants'
import { getUsers } from '../actions/users'

export function* runGetUsers() {
  try {
    yield put(showLoading())
    const users = yield call(_getUsers)
    yield put(getUsers.succeed({ users }))
  } finally {
    yield put(hideLoading())
  }
}

export function* watchGetUsers() {
  yield takeLatest(ActionType.GET_USERS_START, runGetUsers)
}
