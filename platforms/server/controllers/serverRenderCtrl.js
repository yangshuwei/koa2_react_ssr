/*
 * @Author: yangshuwei 
 * @Date: 2018-09-27 11:05:11 
 * @Last Modified by:   yangshuwei 
 * @Last Modified time: 2018-09-27 11:05:11 
 */

import React from 'react'
import { RouterContext } from 'react-router'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import config from '../../common/config'
import configureStore from '../../../app/store/configureStore'
const store = configureStore()

export default async (ctx, next, renderProps) => {
  const route = renderProps.routes[renderProps.routes.length - 1]
  let prefetchTasks = []
  for (let component of renderProps.components) {
    if (component && component.WrappedComponent && component.WrappedComponent.fetch) {
      const _tasks = component.WrappedComponent.fetch(store.getState(), store.dispatch)
      if (Array.isArray(_tasks)) {
        prefetchTasks = prefetchTasks.concat(_tasks)
      } else if (_tasks.then) {
        prefetchTasks.push(_tasks)
      }
    }
  }
  await Promise.all(prefetchTasks)
  await ctx.render('index', {
    title: config.title,
    dev: ctx.app.env === 'development',
    reduxData: store.getState(),
    app: renderToString(<Provider store={store}>
      <RouterContext {...renderProps} />
    </Provider>)
  })  
}
