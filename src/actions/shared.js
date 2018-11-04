import { _getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'

export const ADD_QUESTION = 'ADD_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

export function handleInitialData() {
  return (dispatch) => {
    return Promise.all([
      _getUsers(),
      _getQuestions()
    ])
      .then(([users, questions]) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
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

    return _saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser
    })
      .then((question) => dispatch(addQuestion(question)))
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
  }
}
