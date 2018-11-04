import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Poll from './Poll'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
        <h1>Would You Rather...?</h1>
        <Poll id="vthrdm985a262al8qx3do" />
      </div>
    )
  }
}

export default connect()(App)
