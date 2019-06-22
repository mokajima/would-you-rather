import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import { getUsers } from './actions/users'
import { getQuestions } from './actions/questions'
import LoadingBar from 'react-redux-loading'
import Nav from './containers/Nav'
import Login from './containers/Login'
import NewQuestion from './containers/NewQuestion'
import QuestionsList from './containers/QuestionsList'
import LeaderBoard from './containers/LeaderBoard'
import Poll from './containers/Poll'

const App = ({ authedUser }) => (
  <>
    <Helmet>
      <title>Would You Rather?</title>
    </Helmet>
    <BrowserRouter>
      <div>
        <LoadingBar style={{ backgroundColor: '#15b394' }} />
        <header className="header">
          <div className="header__inner">
            <h1 className="header__title">
              <Link to="/">Would You Rather...?</Link>
            </h1>
            <Nav />
          </div>
        </header>
        {authedUser
          ? (
            <div className="container">
              <Route path="/" exact component={QuestionsList} />
              <Route path="/add" component={NewQuestion} />
              <Route path="/leaderboard" component={LeaderBoard} />
              <Route path="/questions/:id" component={Poll} />
            </div>
          )
          : <Login />
        }
      </div>
    </BrowserRouter>
  </>
)

App.propTypes = {
  authedUser: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.oneOf([null]).isRequired
  ])
}

const AppContainer = () => {
  const authedUser = useSelector(state => state.authedUser)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers.start())
    dispatch(getQuestions.start())
  }, [dispatch])

  return (
    <App authedUser={authedUser} />
  )
}

export default AppContainer
