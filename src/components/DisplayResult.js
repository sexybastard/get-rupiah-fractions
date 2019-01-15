import React from 'react';
import './DisplayResult.css'

const DisplayResult = ({ result, validateResponse }) => {
  const className = validateResponse.isValid ? 'font-result' : 'font-error'
  const displayText = validateResponse.isValid ? result : validateResponse.message

  return (
    <div id="result-container" className="result-container">
      <label className={className}>{displayText}</label>
    </div>
  )
}

export default DisplayResult;
