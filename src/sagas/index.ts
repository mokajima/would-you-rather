import { all } from 'redux-saga/effects'
import { watchGetQuestions } from './questions'
import { watchAddQuestion, watchAnswerQuestion } from './shared'
import { watchGetUsers } from './users'

export default function* rootSaga() {
  yield all([
    watchGetQuestions(),
    watchAddQuestion(),
    watchAnswerQuestion(),
    watchGetUsers()
  ])
}
