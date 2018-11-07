import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Nav from './Nav'
import Login from './Login'
import NewQuestion from './NewQuestion'
import QuestionsList from './QuestionsList'
import LeaderBoard from './LeaderBoard'
import Poll from './Poll'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
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

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App)
