/*
 * @Author: yangshuwei 
 * @Date: 2018-09-27 11:04:37 
 * @Last Modified by:   yangshuwei 
 * @Last Modified time: 2018-09-27 11:04:37 
 */

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore)

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
