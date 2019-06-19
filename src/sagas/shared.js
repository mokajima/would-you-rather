import { call, put, takeEvery } from 'redux-saga/effects'
import { showLoading, hideLoading } from 'react-redux-loading'

import { _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA'
import * as ActionType from '../actions/constants'
import { addQuestion, answerQuestion } from '../actions/shared'

export function* runAddQuestion(action) {
  yield put(showLoading())
  const question = yield call(_saveQuestion, action.payload)
  yield put(addQuestion.succeed({ question }))
  yield put(hideLoading())
}

export function* watchAddQuestion() {
  yield takeEvery(ActionType.ADD_QUESTION_START, runAddQuestion)
}

export function* runAnswerQuestion(action) {
  yield put(showLoading())
  yield call(_saveQuestionAnswer, action.payload)
  yield put(answerQuestion.succeed(action.payload))
  yield put(hideLoading())
}

export function* watchAnswerQuestion() {
  yield takeEvery(ActionType.ANSWER_QUESTION_START, runAnswerQuestion)
}
