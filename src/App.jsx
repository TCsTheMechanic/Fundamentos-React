import './App.css'
import React from 'react'

import Card from './components/layout/Card'
import Grade from './components/basics/Grade'
import Family from './components/basics/Family'
import Lottery from './components/lottery/Lottery'
import EvenOrOdd from './components/conditional/EvenOrOdd'
import UserIdent from './components/conditional/UserIdent'
import FamilyMember from './components/basics/FamilyMember'
import StudentTable from './components/repetition/StudentTable'
import ControlledComponent from './components/controlled/Input'
import ClassComponent from './components/class component/Counter'
import IndirectFather from './components/communication/IndirectFather'

export default () => { //we can change () to _ to show that we wont use params
  return (
    <div className='App'>
      <div className='Cards'>

        <Card title='Random Number Generator' backgroundColor='#1BBF91' borderColor='#14a67d'>
          <Grade student='Peter' min={0} max={10} />
        </Card>

        <Card title='Direct Communication'>
          <Family surename='Parker'>
            <FamilyMember name='Ben' />
            <FamilyMember name='Mary' />
            <FamilyMember name='Peter' />
          </Family>
        </Card>

        <Card title='Conditional Rendering'>
          <EvenOrOdd number={20} />
          <UserIdent user={{ name: 'Peter' }} />
          <UserIdent />
        </Card>

        <Card title='Indirect Communication'>
          <IndirectFather />
        </Card>

        <Card title='Controlled Component'>
          <ControlledComponent />
        </Card>

        <Card title='Class Component'>
          <ClassComponent startNumber={0} />
        </Card>

        <Card title='Lottery'>
          <Lottery></Lottery>
        </Card>

        <Card title='Repetition'>
          <StudentTable />
        </Card>
      </div>
    </div>
  )
}