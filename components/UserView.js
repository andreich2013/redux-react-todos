import React, { PropTypes, Component } from 'react'
import isEqual from '../node_modules/lodash/isEqual'
import serialize from '../node_modules/form-serialize/index'
import Utils from '../middleware/Utils'
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

class UserView extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.stable = Object.assign({}, this.props.item);
    }

    componentWillReceiveProps(nextProps) {
        this.item = Object.assign({}, this.props.item);
        this.stable = Object.assign({}, this.props.item);
    }

    onChange(e, item) {
      console.log(e);
    }

    onSubmit(e) {
      e.preventDefault();

      let data = serialize(this.refs.item, { hash: true });
    }

    handleChange (event) {
      console.log(this.state);
      this.setState({
        item: event.target.value,
      });
    };

    isItemChanged() {
      return isEqual(this.props.item, item);
    }

    render() {
        const { item, isFetching, canUpdate, onSubmit, onChange} = this.props;

        const _noItem = (<div>No item choose</div>);

        const _default = (
            <form ref="item" onSubmit={(e) => this.onSubmit(e)}>
                <TextField
                  ref="firstName"
                  floatingLabelText="First Name"
                  hintText="type value"
                  value={item.firstName}
                  onChange={(e) => this.handleChange(e, item, "firstName")}
                  disabled={isFetching}
                />
                <br/>
                <TextField
                  ref="lastName"
                  floatingLabelText="Last Name"
                  hintText="type value"
                  value={item.lastName}
                  onChange={(e) => onChange(e, item, "lastName")}
                  disabled={isFetching}
                />
                <br/>
                <TextField
                  type="number"
                  ref="age"
                  floatingLabelText="Age"
                  hintText="type value"
                  value={item.age}
                  onChange={(e) => onChange(e, item, "age")}
                  disabled={isFetching}
                />
                <br/>
                <RaisedButton 
                  label="Primary" 
                  primary={true} 
                  disabled={canUpdate || isFetching}
                />
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
