import React from 'react';
import { connect } from 'react-redux'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Question from './Question'

function QuestionsList(props) {
  return (
    <Tabs>
      <TabList>
        <Tab>Unanswered Questions</Tab>
        <Tab>Answered Questions</Tab>
      </TabList>

      <TabPanel>
        {props.unansweredQuestions.map((id) => (
          <Question id={id} key={id} />
        ))}
      </TabPanel>
      <TabPanel>
        {props.answeredQuestions.map((id) => (
          <Question id={id} key={id} />
        ))}
      </TabPanel>
    </Tabs>
  )
}

function mapStateToProps({ authedUser, users, questions }) {
  const answers = authedUser ? users[authedUser].answers : {}
  const questionIds = Object.keys(questions)

  return {
    unansweredQuestions: questionIds.filter((id) => !answers.hasOwnProperty(id)),
    answeredQuestions: questionIds.filter((id) => answers.hasOwnProperty(id))
  }
}

export default connect(mapStateToProps)(QuestionsList)
