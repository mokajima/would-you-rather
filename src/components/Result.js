import React from 'react'
import PropTypes from 'prop-types'
import Data from '../containers/Data'
import './Result.css'

const Result = ({ id }) => (
  <div className="result">
    <p className="result__title">Results:</p>
    <Data id={id} option="optionOne" />
    <Data id={id} option="optionTwo" />
  </div>
)

Result.propTypes = {
  id: PropTypes.string.isRequired
}

export default Result
