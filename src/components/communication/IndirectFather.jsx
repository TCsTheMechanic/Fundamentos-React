import React, { useState } from 'react'

import IndirectSon from './IndirectSon'

export default props => {

  const [name, setName] = useState('Someone')
  const [age, setAge] = useState(0)

  function sendInfo(name, age) {
    setName(name)
    setAge(age)
  }

  return (
    <div>
      <h3>{name} {age}</h3>
      <IndirectSon send={sendInfo}></IndirectSon>
    </div>
  )
}