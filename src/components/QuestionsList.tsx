import React, { FC } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { Question as QuestionType } from '../utils/_DATA'
import Question from '../containers/Question'
import './QuestionsList.css'

interface QuestionsListProps {
  unansweredQuestions: QuestionType['id'][]
  answeredQuestions: QuestionType['id'][]
}

const QuestionsList: FC<QuestionsListProps> = ({
  unansweredQuestions,
  answeredQuestions
}) => (
  <Tabs>
    <TabList>
      <Tab>Unanswered Questions</Tab>
      <Tab>Answered Questions</Tab>
    </TabList>

    <TabPanel>
      {unansweredQuestions.map(id => (
        <Question id={id} key={id} />
      ))}
    </TabPanel>
    <TabPanel>
      {answeredQuestions.map(id => (
        <Question id={id} key={id} />
      ))}
    </TabPanel>
  </Tabs>
)

export default QuestionsList
