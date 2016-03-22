import { connect } from 'react-redux';
import { updateUsers, userToggleUpdateButtonState } from '../../actions/users';
import UserViewComponent from '../../components/UserView/UserView';


const mapStateToProps = (state) => {
  return {
    item: state.users.item,
    isFetching: state.users.isFetching,
    canUpdate: false
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (event, item) => {
      event.preventDefault();

      updateUsers(dispatch, item.id, item);

      event.target.reset();
    },
    onChange: (event) => {
      event.preventDefault();

      dispatch(userToggleUpdateButtonState());
    }
  };
};

const UserView = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserViewComponent);

export default UserView;
