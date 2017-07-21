import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from '../pages'
import Home from '../pages/Home'

export default class RouteMap extends React.Component {
  render() {
    return (
      <Router history={this.props.history}>
        <Route path='/' component={App} >
          <IndexRoute component={Home} />
        </Route>
      </Router>
    )
  }
}