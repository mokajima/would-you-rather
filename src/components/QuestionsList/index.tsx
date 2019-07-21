import React, { FC } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { Questions, Question as QuestionType, Users } from '../../utils/_DATA'
import Question from '../Question'
import './index.css'

interface QuestionsListProps {
  unansweredQuestions: QuestionType['id'][]
  answeredQuestions: QuestionType['id'][]
  questions: Questions
  users: Users
}

const QuestionsList: FC<QuestionsListProps> = ({
  unansweredQuestions,
  answeredQuestions,
  questions,
  users
}) => (
  <Tabs>
    <TabList>
      <Tab>Unanswered Questions</Tab>
      <Tab>Answered Questions</Tab>
    </TabList>

    <TabPanel>
      {unansweredQuestions.map(id => (
        <Question
          key={id}
          question={questions[id]}
          author={users[questions[id].author]}
        />
      ))}
    </TabPanel>
    <TabPanel>
      {answeredQuestions.map(id => (
        <Question
          key={id}
          question={questions[id]}
          author={users[questions[id].author]}
        />
      ))}
    </TabPanel>
  </Tabs>
)

export default QuestionsList
