import React from 'react';
// import UsersList from '../../scn.users/containers/UsersList';
// import UserView from '../../scn.users/containers/UserView';
import { Link } from 'react-router';
import AppBar from 'material-ui/lib/app-bar';

const App = ({children}) => (
  <div>
      <AppBar
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
      >
          <Link to="/users">Users</Link>
          <Link to={`/users/1`}>User 123</Link>
      </AppBar>
      {children}
  </div>
);

export default App;
