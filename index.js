import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import UsersList from './containers/UsersList'
import configureStore from './store/configureStore'

render(
    <Provider store={configureStore()}>
        <UsersList />
    </Provider>,
    document.getElementById('root')
)

