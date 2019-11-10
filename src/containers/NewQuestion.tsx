import React, { FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { State } from 'reducers'
import { User, Option, formatQuestion } from 'utils/_DATA'
import { addQuestion } from 'actions/shared'
import NewQuestion from 'components/NewQuestion'

const NewQuestionContainer: FC = () => {
  const authedUser = useSelector((state: State) => state.authedUser)
  const dispatch = useDispatch()
  const history = useHistory()

  return (
    <NewQuestion
      authedUser={authedUser}
      addQuestion={(
        author: User['id'],
        optionOneText: Option['text'],
        optionTwoText: Option['text']
      ) => {
        const question = formatQuestion({
          author,
          optionOneText,
          optionTwoText
        })
        dispatch(addQuestion.start({ question }))
        history.push('/')
      }}
    />
  )
}

export default NewQuestionContainer
