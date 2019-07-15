import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { State } from '../reducers'
import { Question } from '../utils/_DATA'
import Poll from '../components/Poll'

type PollContainerProps = {} & RouteComponentProps<{ id: Question['id'] }>

const PollContainer: FC<PollContainerProps> = ({ match }) => {
  const { id } = match.params
  const authedUser = useSelector((state: State) => state.authedUser)
  const users = useSelector((state: State) => state.users)
  const questions = useSelector((state: State) => state.questions)

  const question = questions[id]
  const author = question ? users[question.author] : null
  const answer = authedUser ? users[authedUser].answers[id] : null

  return <Poll question={question} author={author} answer={answer} />
}

export default withRouter(PollContainer)
