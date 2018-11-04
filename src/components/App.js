import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Login from './Login'
import QuestionsList from './QuestionsList'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
        <h1>Would You Rather...?</h1>
        {this.props.authedUser
          ? <QuestionsList />
          : <Login />
        }
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App)
