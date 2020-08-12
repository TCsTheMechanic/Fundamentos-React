import React from 'react'

import {If, Else} from './Condition'

export default props => {

  const user = props.user || {}

  return(
    <div>
      <If test={user.name}>
        Welcome <strong>{user.name}</strong>!
        <Else>
          Welcome <strong>someone</strong>!
        </Else>
      </If>
    </div>
  )
}