import React, { PropTypes, Component } from 'react'
import User from './User'

class Users extends Component {
    componentDidMount() {
        this.props.onRead();
    }

    componentWillReceiveProps(nextProps) {
        //nextProps.onRead();
    }

    render() {
        const { list, onEdit, onDelete} = this.props
        return (
            <table>
                <thead>
                <tr>
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td></td>
                    <td></td>
                </tr>
                </thead>
                <tbody>
                {list.map(item =>
                    <User
                        key={item.id}
                        item={item}
                        onEdit={() => onEdit(item.id)}
                        onDelete={() => onDelete(item.id)}
                    />
                )}
                </tbody>
            </table>
        )
    }
}

Users.propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired
    }).isRequired).isRequired,
    //onEdit: PropTypes.func.isRequired,
    //onDelete: PropTypes.func.isRequired
}

export default Users
