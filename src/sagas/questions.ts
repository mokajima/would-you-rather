import { call, put, takeEvery } from 'redux-saga/effects'
import { showLoading, hideLoading } from 'react-redux-loading'

import { _getQuestions } from '../utils/_DATA'
import * as ActionType from '../actions/constants'
import { getQuestions } from '../actions/questions'

export function* runGetQuestions() {
  yield put(showLoading())
  const questions = yield call(_getQuestions)
  yield put(getQuestions.succeed({ questions }))
  yield put(hideLoading())
}

export function* watchGetQuestions() {
  yield takeEvery(ActionType.GET_QUESTIONS_START, runGetQuestions)
}
