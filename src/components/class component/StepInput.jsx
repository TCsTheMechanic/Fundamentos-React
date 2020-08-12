import React from 'react'

export default props => {
  return (
    <div>
          <label htmlFor="stepInput">Step: </label>
          <input 
            id="stepInput" 
            type="number" 
            value={props.stepState} 
            onChange={props.setStep} 
          />
        </div>
  )
}