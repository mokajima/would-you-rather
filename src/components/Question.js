import React from 'react';
import { connect } from 'react-redux'

function Questions(props) {
  return (
    <div>
      <span>{props.author.name} asks: </span>
      <div>
        <img src={props.author.avatarURL} alt="" />
        <div>
          <span>Would you rather</span>
          <p>...{props.question.optionOne.text.substr(0, 14)}...</p>
        </div>
      </div>
    </div>
  )
}

function mapStateToProps({ users, questions }, { id }) {
  const question = questions[id]
  const author = users[question.author]

  return {
    question,
    author
  }
}

export default connect(mapStateToProps)(Questions)
