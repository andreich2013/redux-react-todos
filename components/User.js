import React, { PropTypes } from 'react'

const User = ({ key, item, onEdit, onDelete }) => (
  <tr>
    <td>{item.firstName}</td>
    <td>{item.lastName}</td>
    <td onClick={onEdit}>edit</td>
    <td onClick={onDelete}>delete</td>
  </tr>
)

User.propTypes = {
  key: PropTypes.number.isRequired,
  item: PropTypes.object.isRequired
}

export default User
