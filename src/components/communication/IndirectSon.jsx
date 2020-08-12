import React from 'react'

export default props => {

  const maxAge = 25
  const minAge = 10
  const randomAge = _ => parseInt((Math.random() * (maxAge - minAge) + minAge))

  return (
    <div>
      <button onClick={_ => props.send('Peter', randomAge)}>
        Send
      </button>
    </div>
  )
}