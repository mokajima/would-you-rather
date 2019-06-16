import { _getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { showLoading, hideLoading } from 'react-redux-loading'
import { ADD_QUESTION, ANSWER_QUESTION } from './constants'

export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading())
    return Promise.all([
      _getUsers(),
      _getQuestions()
    ])
      .then(([users, questions]) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(hideLoading())
      })
  }
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())

    return _saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser
    })
      .then(question => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()))
  }
}

function answerQuestion({ authedUser, qid, answer }) {
  return {
    type: ANSWER_QUESTION,
    authedUser,
    qid,
    answer
  }
}

export function handleAnswerQuestion(qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())

    return _saveQuestionAnswer({
      authedUser,
      qid,
      answer
    })
      .then(() => dispatch(answerQuestion({
        authedUser,
        qid,
        answer
      })))
      .then(() => dispatch(hideLoading()))
  }
}
