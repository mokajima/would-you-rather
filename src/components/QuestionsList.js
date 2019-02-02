import React from 'react'
import PropTypes from 'prop-types'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Question from '../containers/Question'

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

QuestionsList.propTypes = {
  unansweredQuestions: PropTypes.array.isRequired,
  answeredQuestions: PropTypes.array.isRequired
}

export default QuestionsList
