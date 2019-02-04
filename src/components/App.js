import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Nav from './Nav'
import Login from '../containers/Login'
import NewQuestion from '../containers/NewQuestion'
import QuestionsList from '../containers/QuestionsList'
import LeaderBoard from '../containers/LeaderBoard'
import Poll from '../containers/Poll'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Helmet>
            <title>Would You Rather?</title>
          </Helmet>
          <LoadingBar style={{ backgroundColor: '#15b394' }} />
          <header className="header">
            <div className="header__inner">
              <h1 className="header__title">
                <Link to="/">Would You Rather...?</Link>
              </h1>
              <Nav />
            </div>
          </header>
          {this.props.authedUser
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
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  authedUser: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.oneOf([null]).isRequired
  ])
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App)
