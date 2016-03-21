import { connect } from 'react-redux'
import { updateUsers, userToggleUpdateButtonState } from '../actions/users'
import UserViewComponent from '../components/UserView/UserView'


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
      console.log(e, item, prop)
      dispatch(userToggleUpdateButtonState(item))
      dispatch(onDataChange(prop, item.prop))
    }
  }
}

const UserView = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserViewComponent)

export default UserView
