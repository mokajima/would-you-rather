import { Reducer } from 'redux'
import { call } from 'redux-saga/effects'
import { expectSaga } from 'redux-saga-test-plan'
import { showLoading, hideLoading } from 'react-redux-loading'
import reducer, { initialState } from 'reducers'
import * as actions from 'actions/questions'
import { questions, _getQuestions } from 'utils/_DATA'
import { watchGetQuestions } from './questions'

describe("Questions sagas' saga", () => {
  describe("Get questions' saga", () => {
    it('should succeed', async () => {
      return expectSaga(watchGetQuestions)
        .withReducer(reducer as Reducer, initialState)
        .put(showLoading())
        .provide([[call(_getQuestions), questions]])
        .put(actions.getQuestions.succeed({ questions }))
        .put(hideLoading())
        .dispatch(actions.getQuestions.start())
        .hasFinalState({ ...initialState, questions })
        .silentRun()
    })
  })
})
