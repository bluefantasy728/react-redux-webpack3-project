import React from 'react'
import ReactDOM from 'react-dom'
import { hashHistory } from 'react-router'
import { Provider } from 'react-redux'

import RouteMap from './router/routeMap.jsx'
import store from './store/store.js'

ReactDOM.render(
  <Provider store={store}>
    <RouteMap history={hashHistory}/>
  </Provider>,
  document.getElementById('root')
)