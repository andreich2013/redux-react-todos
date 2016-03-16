import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import UsersList from '../containers/UsersList'

//const App = () => (
//    <div>
//        <AddTodo />
//        <VisibleTodoList />
//        <Footer />
//    </div>
//)

const App = () => (
  <div>
    <UsersList />
  </div>
)

export default App
