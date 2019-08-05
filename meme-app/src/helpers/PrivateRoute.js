import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import h from './helper'

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => {
    return (
      h.isAuthenticated()
        ? <Component {...props} />
        : <Redirect to='/login' />
    )
  }
  } />
)
