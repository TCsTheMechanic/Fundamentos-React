import React, { useState } from 'react'

export default props => {

  const [value, setValue] = useState('This is a test!')

  function changeValue(content){
    setValue(content.target.value)
  }

  return (
    <div>
      <h2>{value}</h2>
      <input type="text" value={value} onChange={changeValue}/>
      <input type="text" value='Read Only' readOnly />
    </div>
  )
}