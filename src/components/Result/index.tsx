import React, { FC } from 'react'
import { Question } from '../../utils/_DATA'
import Data from '../../containers/Data'
import './index.css'

interface ResultProps {
  id: Question['id']
}

const Result: FC<ResultProps> = ({ id }) => (
  <div className="result">
    <p className="result__title">Results:</p>
    <Data id={id} option="optionOne" />
    <Data id={id} option="optionTwo" />
  </div>
)

export default Result
