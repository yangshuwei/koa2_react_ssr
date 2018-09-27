/*
 * @Author: yangshuwei 
 * @Date: 2018-09-27 11:04:25 
 * @Last Modified by:   yangshuwei 
 * @Last Modified time: 2018-09-27 11:04:25 
 */

import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/counter'

export default function counter(state = 0, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1
    case DECREMENT_COUNTER:
      return state - 1
    default:
      return state
  }
}
