/*
 * @Author: yangshuwei 
 * @Date: 2018-09-27 11:03:44 
 * @Last Modified by:   yangshuwei 
 * @Last Modified time: 2018-09-27 11:03:44 
 */

import React, { Component, PropTypes } from 'react'

export default class Counter extends Component {
  static propTypes = {
    increment: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired
  }
  render() {
    const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props

    return (
      <p>
        Counter: {counter} times
        {' '}
        <button onClick={increment}>+</button>
        {' '}
        <button onClick={decrement}>-</button>
        {' '}
        <button onClick={incrementIfOdd}>Increment if odd</button>
        {' '}
        <button onClick={incrementAsync}>Increment Async</button>
      </p>
    )
  }
}