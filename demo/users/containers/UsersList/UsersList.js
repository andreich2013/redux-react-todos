import { connect } from 'react-redux';
import { push } from 'react-router-redux'
import { chooseUser } from '../../actions/user';
import { readUsers, createUsers, deleteUsers } from '../../actions/users';
import Users from '../../components/Users/Users';


const mapStateToProps = (state) => {
  return {
    list: state.users.items,
    isFetching: state.users.isFetching
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCreate: (data) => dispatch(createUsers(data)),
    onRead: () => dispatch(readUsers()),
    onEdit: (id) => {
      dispatch(chooseUser(id));
      dispatch(push(`/users/${id}`));
    },
    onDelete: (id) => dispatch(deleteUsers(id))
  };
};

const UsersList = connect(
    mapStateToProps,
    mapDispatchToProps
)(Users);

export default UsersList;
