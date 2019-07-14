export interface Users {
  [UserId: string]: User
}

export interface User {
  id: string
  name: string
  avatarURL: string
  answers: Answers
  questions: Question['id'][]
}

interface Answers {
  [QuestionId: string]: Answer
}

export type Answer = 'optionOne' | 'optionTwo'

export interface Questions {
  [QuestionId: string]: Question
}

export interface Question {
  id: string
  author: string
  timestamp: number
  optionOne: Option
  optionTwo: Option
}

export interface Option {
  votes: User['id'][]
  text: string
}

let users: Users = {
  sarahedo: {
    id: 'sarahedo',
    name: 'Sarah Edo',
    avatarURL: '/static/sarahedo.png',
    answers: {
      '8xf0y6ziyjabvozdd253nd': 'optionOne',
      '6ni6ok3ym7mf1p33lnez': 'optionOne',
      am8ehyc8byjqgar0jgpub9: 'optionTwo',
      loxhs1bqm25b708cmbf3g: 'optionTwo'
    },
    questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
  },
  tylermcginnis: {
    id: 'tylermcginnis',
    name: 'Tyler McGinnis',
    avatarURL: '/static/tylermcginnis.png',
    answers: {
      vthrdm985a262al8qx3do: 'optionOne',
      xj352vofupe1dqz9emx13r: 'optionTwo'
    },
    questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do']
  },
  johndoe: {
    id: 'johndoe',
    name: 'John Doe',
    avatarURL: '/static/johndoe.png',
    answers: {
      xj352vofupe1dqz9emx13r: 'optionOne',
      vthrdm985a262al8qx3do: 'optionTwo',
      '6ni6ok3ym7mf1p33lnez': 'optionOne'
    },
    questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r']
  }
}

let questions: Questions = {
  '8xf0y6ziyjabvozdd253nd': {
    id: '8xf0y6ziyjabvozdd253nd',
    author: 'sarahedo',
    timestamp: 1467166872634,
    optionOne: {
      votes: ['sarahedo'],
      text: 'have horrible short term memory'
    },
    optionTwo: {
      votes: [],
      text: 'have horrible long term memory'
    }
  },
  '6ni6ok3ym7mf1p33lnez': {
    id: '6ni6ok3ym7mf1p33lnez',
    author: 'johndoe',
    timestamp: 1468479767190,
    optionOne: {
      votes: [],
      text: 'become a superhero'
    },
    optionTwo: {
      votes: ['johndoe', 'sarahedo'],
      text: 'become a supervillian'
    }
  },
  am8ehyc8byjqgar0jgpub9: {
    id: 'am8ehyc8byjqgar0jgpub9',
    author: 'sarahedo',
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: 'be telekinetic'
    },
    optionTwo: {
      votes: ['sarahedo'],
      text: 'be telepathic'
    }
  },
  loxhs1bqm25b708cmbf3g: {
    id: 'loxhs1bqm25b708cmbf3g',
    author: 'tylermcginnis',
    timestamp: 1482579767190,
    optionOne: {
      votes: [],
      text: 'be a front-end developer'
    },
    optionTwo: {
      votes: ['sarahedo'],
      text: 'be a back-end developer'
    }
  },
  vthrdm985a262al8qx3do: {
    id: 'vthrdm985a262al8qx3do',
    author: 'tylermcginnis',
    timestamp: 1489579767190,
    optionOne: {
      votes: ['tylermcginnis'],
      text: 'find $50 yourself'
    },
    optionTwo: {
      votes: ['johndoe'],
      text: 'have your best friend find $500'
    }
  },
  xj352vofupe1dqz9emx13r: {
    id: 'xj352vofupe1dqz9emx13r',
    author: 'johndoe',
    timestamp: 1493579767190,
    optionOne: {
      votes: ['johndoe'],
      text: 'write JavaScript'
    },
    optionTwo: {
      votes: ['tylermcginnis'],
      text: 'write Swift'
    }
  }
}

const generateUID = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

// eslint-disable-next-line no-underscore-dangle
export const _getUsers = () => {
  return new Promise(res => {
    setTimeout(() => res({ ...users }), 1000)
  })
}

// eslint-disable-next-line no-underscore-dangle
export const _getQuestions = () => {
  return new Promise(res => {
    setTimeout(() => res({ ...questions }), 1000)
  })
}

interface FormatQuestionParams {
  author: Question['author']
  optionOneText: Option['text']
  optionTwoText: Option['text']
}

export const formatQuestion = (params: FormatQuestionParams): Question => {
  const { author, optionOneText, optionTwoText } = params

  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: [],
      text: optionOneText
    },
    optionTwo: {
      votes: [],
      text: optionTwoText
    }
  }
}

interface SaveQuestionParams {
  question: Question
}

// eslint-disable-next-line no-underscore-dangle
export const _saveQuestion = (params: SaveQuestionParams) => {
  const { question } = params

  return new Promise(res => {
    setTimeout(() => {
      questions = {
        ...questions,
        [question.id]: question
      }

      users = {
        ...users,
        [question.author]: {
          ...users[question.author],
          questions: users[question.author].questions.concat([question.id])
        }
      }

      res(question)
    }, 1000)
  })
}

interface SaveQuestionAnswerParams {
  authedUser: User['id']
  qid: Question['id']
  answer: Answer
}

// eslint-disable-next-line no-underscore-dangle
export const _saveQuestionAnswer = (params: SaveQuestionAnswerParams) => {
  const { authedUser, qid, answer } = params

  return new Promise(res => {
    setTimeout(() => {
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [qid]: answer
          }
        }
      }

      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([authedUser])
          }
        }
      }

      res()
    }, 500)
  })
}
