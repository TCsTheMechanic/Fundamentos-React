import React from 'react'
import './Card.css'

export default (props) => {
  
  const cardStyle = {
    backgroundColor: props.backgroundColor || '#1BBF91',
    borderColor: props.borderColor || '#14a67d'
  }

  return (
    <div className='Card' style={cardStyle}>
      <div className='Title'>
        <h3>{props.title}</h3>
      </div>
      <div className='Content'>{props.children}</div>
    </div>
  )
}