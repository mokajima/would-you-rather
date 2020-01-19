import React, { FC, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import LoadingBar from 'react-redux-loading'

import { State } from 'reducers'
import { getUsers } from 'actions/users'
import { getQuestions } from 'actions/questions'
import Nav from 'containers/Nav'
import Login from 'containers/Login'
import NewQuestion from 'containers/NewQuestion'
import QuestionsList from 'containers/QuestionsList'
import LeaderBoard from 'containers/LeaderBoard'
import Poll from 'containers/Poll'
import 'App.css'

const App: FC<{}> = () => {
  const authedUser = useSelector((state: State) => state.authedUser)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers.start())
    dispatch(getQuestions.start())
  }, [dispatch])

  return (
    <>
      <Helmet
        defaultTitle="Would You Rather?"
        titleTemplate="%s | Would You Rather?"
      />
      <BrowserRouter>
        <div>
          <LoadingBar style={{ backgroundColor: '#15b394' }} />
          <header className="header">
            <div className="header__inner">
              <h1 data-testid="header-title" className="header__title">
                <Link to="/">Would You Rather...?</Link>
              </h1>
              <Nav />
            </div>
          </header>
          {authedUser ? (
            <div className="container">
              <Route path="/" exact component={QuestionsList} />
              <Route path="/add" component={NewQuestion} />
              <Route path="/leaderboard" component={LeaderBoard} />
              <Route path="/questions/:id" component={Poll} />
            </div>
          ) : (
            <Login />
          )}
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
