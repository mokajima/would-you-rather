import React from 'react'
import PropTypes from 'prop-types'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Question from '../containers/Question'

const QuestionsList = ({
  unansweredQuestions,
  answeredQuestions
}) => (
  <Tabs>
    <TabList>
      <Tab>Unanswered Questions</Tab>
      <Tab>Answered Questions</Tab>
    </TabList>

    <TabPanel>
      {unansweredQuestions.map((id) => (
        <Question id={id} key={id} />
      ))}
    </TabPanel>
    <TabPanel>
      {answeredQuestions.map((id) => (
        <Question id={id} key={id} />
      ))}
    </TabPanel>
  </Tabs>
)

QuestionsList.propTypes = {
  unansweredQuestions: PropTypes.array.isRequired,
  answeredQuestions: PropTypes.array.isRequired
}

export default QuestionsList
