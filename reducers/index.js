import { combineReducers } from 'redux'
import todos from './todos'
import users from './users'
import visibilityFilter from './visibilityFilter'
import { routeReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  todos,
  visibilityFilter,
  users,
  routing: routeReducer
})

export default rootReducer
