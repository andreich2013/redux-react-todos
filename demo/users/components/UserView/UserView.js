import React, { PropTypes, Component } from 'react';
// import isEqual from 'lodash/isEqual';

class UserView extends Component {

  constructor(props) {
    super(props);

    this.item = Object.assign({}, this.props.item);
    this.stable = Object.assign({}, this.props.item);
  }

  componentDidMount() {

  }

  componentWillReceiveProps() {

  }

  onSubmit(event) {
    event.preventDefault();

    // let data = serialize(this.refs.item, { hash: true });
  }

  // isItemChanged() {
  //  return isEqual(this.item, this.stable);
  // }

  render() {
    const { item, isFetching, canUpdate } = this.props;
    const style = require('./UserView.scss');

    const _noItem = (<div>No item choose</div>);

    const _default = (
      <form ref="item" className={style.testClass} onSubmit={(event) => this.onSubmit(event)}>
        <label>First Name</label>
        <input type="text"
               name="firstName"
               value={item.firstName}
               onChange={(event) => this.onChange(event, item)}
               disabled={isFetching}/>
        <br/>
        <label>Last Name</label>
        <input type="text"
               name="lastName"
               value={item.lastName}
               onChange={(event) => this.onChange(event, item)}
               disabled={isFetching}/>
        <br/>
        <label>Age</label>
        <input type="number"
               name="age"
               value={item.age}
               onChange={(event) => this.onChange(event, item)}
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
    age: PropTypes.number.isRequired
  }).isRequired).isRequired,
  //isFetching: PropTypes.boolean.isRequired,
  //canUpdate: PropTypes.func.isRequired
};

export default UserView;
