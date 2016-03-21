import React, { PropTypes, Component } from 'react'
import isEqual from '../node_modules/lodash/isEqual'
import serialize from '../node_modules/form-serialize/index'
import Utils from '../middleware/Utils'

class UserView extends Component {

  constructor(props) {
    super(props);

    this.item = Object.assign({}, this.props.item);
    this.stable = Object.assign({}, this.props.item);
  }

  componentDidMount() {

  }

  onSubmit(e) {
    e.preventDefault();

    let data = serialize(this.refs.item, { hash: true });

  }

  isItemChanged() {
    return isEqual(this.item, this.stable);
  }

  componentWillReceiveProps() {

  }

  render() {
    const { item, isFetching, canUpdate, onSubmit, onChange} = this.props;

    const _noItem = (<div>No item choose</div>);

    const _default = (
      <form ref="item" onSubmit={(e) => this.onSubmit(e)}>
        <label>First Name</label>
        <input type="text"
               name="firstName"
               value={item.firstName}
               onChange={() => this.onChange(e, item)}
               disabled={isFetching}/>
        <br/>
        <label>Last Name</label>
        <input type="text"
               name="lastName"
               value={item.lastName}
               onChange={() => this.onChange(e, item)}
               disabled={isFetching}/>
        <br/>
        <label>Age</label>
        <input type="number"
               name="age"
               value={item.age}
               onChange={() => this.onChange(e, item)}
               disabled={isFetching}/>
        <br/>
        <button type="submit" disabled={canUpdate || isFetching}>Update</button>
      </form>
    );

    return !item ? _noItem : _default;
  }
}

UserView.propTypes = {
  item: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  }).isRequired).isRequired
}

export default UserView
