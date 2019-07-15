import { call, put, takeLatest } from 'redux-saga/effects'
import { showLoading, hideLoading } from 'react-redux-loading'

import { _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA'
import * as ActionType from '../actions/constants'
import { addQuestion, answerQuestion } from '../actions/shared'

export function* runAddQuestion(action: ReturnType<typeof addQuestion.start>) {
  try {
    yield put(showLoading())
    const question = yield call(_saveQuestion, action.payload)
    yield put(addQuestion.succeed({ question }))
  } finally {
    yield put(hideLoading())
  }
}

export function* watchAddQuestion() {
  yield takeLatest(ActionType.ADD_QUESTION_START, runAddQuestion)
}

export function* runAnswerQuestion(
  action: ReturnType<typeof answerQuestion.start>
) {
  try {
    yield put(showLoading())
    yield call(_saveQuestionAnswer, action.payload)
    yield put(answerQuestion.succeed(action.payload))
  } finally {
    yield put(hideLoading())
  }
}

export function* watchAnswerQuestion() {
  yield takeLatest(ActionType.ANSWER_QUESTION_START, runAnswerQuestion)
}
