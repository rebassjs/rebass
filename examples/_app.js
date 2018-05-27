import React from 'react'
import {
  Switch,
  Route,
  Link
} from 'react-router-dom'
import { Provider, Box } from '../src'

export default ({
  routes,
  render
}) => (
  <Provider>
    <Box p={4}>
      <Switch>
        {render()}
        <Route
          render={() => (
            <ul>
              {routes.map(route => (
                <li key={route.key}>
                  <Link to={route.path}>
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        />
      </Switch>
    </Box>
  </Provider>
)
