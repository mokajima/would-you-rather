import React, { FC, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import LoadingBar from 'react-redux-loading'

import { State } from './reducers'
import { getUsers } from './actions/users'
import { getQuestions } from './actions/questions'
import Nav from './containers/Nav'
import Login from './containers/Login'
import NewQuestion from './containers/NewQuestion'
import QuestionsList from './containers/QuestionsList'
import LeaderBoard from './containers/LeaderBoard'
import Poll from './containers/Poll'
import * as styles from './App.module.css'

const App: FC<{}> = () => {
  const authedUser = useSelector((state: State) => state.authedUser)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers.start())
    dispatch(getQuestions.start())
  }, [dispatch])

  return (
    <>
      <Helmet>
        <title>Would You Rather?</title>
      </Helmet>
      <BrowserRouter>
        <div>
          <LoadingBar style={{ backgroundColor: '#15b394' }} />
          <header className={styles.header}>
            <div className={styles.headerInner}>
              <h1 data-testid="header-title" className={styles.headerTitle}>
                <Link to="/">Would You Rather...?</Link>
              </h1>
              <Nav />
            </div>
          </header>
          {authedUser ? (
            <div className={styles.container}>
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
