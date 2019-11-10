import { Reducer } from 'redux'
import { call } from 'redux-saga/effects'
import { expectSaga } from 'redux-saga-test-plan'
import { showLoading, hideLoading } from 'react-redux-loading'
import reducer, { initialState } from 'reducers'
import { watchGetUsers } from './users'
import * as actions from 'actions/users'
import { users, _getUsers } from 'utils/_DATA'

describe("Users sagas' saga", () => {
  describe("Get users' saga", () => {
    it('should succeed', async () => {
      return expectSaga(watchGetUsers)
        .withReducer(reducer as Reducer, initialState)
        .put(showLoading())
        .provide([[call(_getUsers), users]])
        .put(actions.getUsers.succeed({ users }))
        .put(hideLoading())
        .dispatch(actions.getUsers.start())
        .hasFinalState({ ...initialState, users })
        .silentRun()
    })
  })
})
