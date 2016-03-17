import { connect } from 'react-redux'
import { updateUsers, userToggleUpdateButtonState } from '../actions/users'
import UserViewComponent from '../components/UserView'


const mapStateToProps = (state) => {
  return {
    item: state.users.item,
    isFetching: state.users.isFetching,
    canUpdate: false
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (e, item) => {
      e.preventDefault()

      updateUsers(dispatch, item.id, item)

      e.target.reset();
    },
    onChange: (e, item) => {
      e.preventDefault()

      dispatch(userToggleUpdateButtonState())
    }
  }
}

const UserView = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserViewComponent)

export default UserView
