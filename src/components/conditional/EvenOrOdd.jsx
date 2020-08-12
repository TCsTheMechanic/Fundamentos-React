import React from 'react'

export default props => {

  const isEven = props.number % 2 === 0

  return (
    <div>
      {isEven ? 
        <span>{props.number} is <strong>Even</strong></span> : 
        <span>{props.number} is <strong>Odd</strong></span>
      }
    </div>
  )
}