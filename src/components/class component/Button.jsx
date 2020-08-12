import React from 'react'

export default props => {
  return (
    <button onClick={props.operation}>{props.symbol}</button>
  )
}