import React from 'react'

export default (props) => {

  const { min, max } = props //Destructuring concept
  const note = (Math.random() * (max - min) + min).toFixed(2)

  const status = note >= 7 ? 'Approved' : 'Desaproved'

  return ( // <React.Fragment> can be changed to <>
    <React.Fragment>
      <p>
        <strong>{props.student} </strong>
        has note
        <strong> {note} </strong>
        and is
        <strong> {status}</strong>
      </p>
    </React.Fragment>
  )
}