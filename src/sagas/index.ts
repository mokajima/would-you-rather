import { all, fork } from 'redux-saga/effects'
import { watchGetQuestions } from './questions'
import { watchAddQuestion, watchAnswerQuestion } from './shared'
import { watchGetUsers } from './users'

export default function* rootSaga() {
  yield all([
    fork(watchGetQuestions),
    fork(watchAddQuestion),
    fork(watchAnswerQuestion),
    fork(watchGetUsers)
  ])
}
