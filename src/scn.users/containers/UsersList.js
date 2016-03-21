import { connect } from 'react-redux';
import { readUsers, createUsers, chooseUser, deleteUsers } from '../actions/users';
import Users from '../components/Users';


const mapStateToProps = (state) => {
  return {
    list: state.users.items,
    isFetching: state.users.isFetching
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCreate: (data) => createUsers(dispatch, data),
    onRead: () => readUsers(dispatch),
    onEdit: (id) => chooseUser(dispatch, id),
    onDelete: (id) => deleteUsers(dispatch, id)
  };
};

const UsersList = connect(
    mapStateToProps,
    mapDispatchToProps
)(Users);

export default UsersList;
