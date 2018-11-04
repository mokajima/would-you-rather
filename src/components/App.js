import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
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
          <LoadingBar />
          <h1>Would You Rather...?</h1>
          <Nav />
          {this.props.authedUser
            ? (
              <Fragment>
                <Route path="/" exact component={QuestionsList} />
                <Route path="/add" component={NewQuestion} />
                <Route path="/leaderboard" component={LeaderBoard} />
                <Route path="/questions/:id" component={Poll} />
              </Fragment>
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
