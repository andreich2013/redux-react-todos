import { connect } from 'react-redux'
import { readUsers, createUsers, updateUsers, deleteUsers } from '../actions/users'
import Users from '../components/Users'
import UsersApi from './middleware/UsersApi'


const api = new UsersApi();

const mapStateToProps = (state) => {
  return {
    list: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCreate: (data) => dispatch(createUsers(data)),
    onRead: (dispatch) => readUsers,
    onEdit: (id) => dispatch(updateUsers(id)),
    onDelete: (id) => dispatch(deleteUsers(id))
  }
}

const UsersList = connect(
    mapStateToProps,
    mapDispatchToProps
)(Users)

export default UsersList
