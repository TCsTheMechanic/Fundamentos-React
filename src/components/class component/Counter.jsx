import './Counter.css'
import React, { Component } from 'react'

import Display from './Display'
import Button from './Button'
import StepInput from './StepInput'

export default class Counter extends Component {

  /*
  constructor(props) {
    super(props)
    this.increment = this.increment.bind(this)
  }
  */

  state = {
    number: this.props.startNumber || 0,
    step: this.props.startIncrementer || 1
  }

  increment = _ => {
    this.setState({
      number: this.state.number + this.state.step
    })
  }

  decrement = _ => {
    this.setState({
      number: this.state.number - this.state.step
    })
  }

  setStep = (e) => { //e is an event
    this.setState({
      step: +e.target.value //+ changes to integer
    })
  }

  render() {
    return (
      <div className='Counter'>
        <Display number={this.state.number} />
        <StepInput stepState={this.state.step} setStep={this.setStep} />
        <Button operation={this.increment} symbol='+' />
        <Button operation={this.decrement} symbol='-' />
      </div>
    )
  }
}