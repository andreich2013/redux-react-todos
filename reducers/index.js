import { combineReducers } from 'redux'
import todos from './todos'
import users from './users'
import visibilityFilter from './visibilityFilter'

const rootReducer = combineReducers({
  todos,
  visibilityFilter,
  users
})

export default rootReducer
