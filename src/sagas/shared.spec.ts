import { Reducer } from 'redux'
import { call } from 'redux-saga/effects'
import { expectSaga } from 'redux-saga-test-plan'
import { showLoading, hideLoading } from 'react-redux-loading'
import reducer, { initialState } from 'reducers'
import * as actions from 'actions/shared'
import { Answer, _saveQuestion, _saveQuestionAnswer } from 'utils/_DATA'
import { watchAddQuestion, watchAnswerQuestion } from './shared'

const fakeAnswer = {
  authedUser: 'sarahedo',
  qid: '8xf0y6ziyjabvozdd253nd',
  answer: 'optionOne' as Answer
}

const fakeQuestion = {
  id: '8xf0y6ziyjabvozdd253nd',
  author: 'sarahedo',
  timestamp: 1467166872634,
  optionOne: {
    votes: [],
    text: 'have horrible short term memory'
  },
  optionTwo: {
    votes: [],
    text: 'have horrible long term memory'
  }
}

const fakeUser = {
  id: 'sarahedo',
  name: 'Sarah Edo',
  avatarURL: '/static/sarahedo.png',
  answers: {},
  questions: []
}

describe("Questions sagas' saga", () => {
  describe("Add question's saga", () => {
    it('should succeed', async () => {
      return expectSaga(watchAddQuestion)
        .withReducer(reducer as Reducer, {
          ...initialState,
          users: { [fakeUser.id]: fakeUser }
        })
        .put(showLoading())
        .provide([
          [call(_saveQuestion, { question: fakeQuestion }), fakeQuestion]
        ])
        .put(actions.addQuestion.succeed({ question: { ...fakeQuestion } }))
        .put(hideLoading())
        .dispatch(actions.addQuestion.start({ question: { ...fakeQuestion } }))
        .hasFinalState({
          ...initialState,
          questions: {
            [fakeQuestion.id]: fakeQuestion
          },
          users: {
            [fakeUser.id]: {
              ...fakeUser,
              questions: [fakeQuestion.id]
            }
          }
        })
        .silentRun()
    })
  })

  describe("Answer question's saga", () => {
    it('should succeed', async () => {
      return expectSaga(watchAnswerQuestion)
        .withReducer(reducer as Reducer, {
          ...initialState,
          authedUser: fakeUser.id,
          questions: { [fakeQuestion.id]: fakeQuestion },
          users: { [fakeUser.id]: fakeUser }
        })
        .put(showLoading())
        .provide([[call(_saveQuestionAnswer, { ...fakeAnswer }), null]])
        .put(actions.answerQuestion.succeed(fakeAnswer))
        .put(hideLoading())
        .dispatch(actions.answerQuestion.start(fakeAnswer))
        .hasFinalState({
          ...initialState,
          authedUser: fakeUser.id,
          questions: {
            [fakeQuestion.id]: {
              ...fakeQuestion,
              [fakeAnswer.answer]: {
                ...fakeQuestion[fakeAnswer.answer],
                votes: [fakeAnswer.authedUser]
              }
            }
          },
          users: {
            [fakeUser.id]: {
              ...fakeUser,
              answers: {
                ...fakeUser.answers,
                [fakeAnswer.qid]: fakeAnswer.answer
              }
            }
          }
        })
        .silentRun()
    })
  })
})
