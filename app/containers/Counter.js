/*
 * @Author: yangshuwei 
 * @Date: 2018-09-27 11:04:17 
 * @Last Modified by:   yangshuwei 
 * @Last Modified time: 2018-09-27 11:04:17 
 */

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Counter from '../components/Counter'
import * as CounterActions from '../actions/counter'

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
