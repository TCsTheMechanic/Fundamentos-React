import './StudentTable.css'
import React from 'react'

import Students from '../../data/students'

export default _ =>{

  function getLine() {
    return Students.map(student => {
      return (
        <tr className={student.id % 2 === 0 ? 'Even' : 'Odd'} key={student.id}>
          <td>{student.id}</td>
          <td>{student.name}</td>
          <td>{student.note.toFixed(2).replace('.', ',')}</td>
        </tr>
      )
    })
  }

  return (
    <div className='StudentsTable'>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          {getLine()}
        </tbody>
      </table>
    </div>
  )
}