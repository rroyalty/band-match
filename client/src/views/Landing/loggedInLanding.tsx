import React from 'react';
import { Switch } from "react-router-dom";
import Find from '../Find/Find';
import TempProfile from '../CreateProfile/Profile';
// import UserProfile from '../UserProfile/UserProfile'
import CreateProfile from '../CreateProfile/CreateProfile';
import ProtectedRoute from '../../auth/protected-route';


const LoggedInLanding: React.FC = (props: any): JSX.Element => {

  return (
        <>
          <Switch>
            <ProtectedRoute exact path="/tempprofile" component={TempProfile} />
            <ProtectedRoute exact path="/createprofile" component={CreateProfile} />
            {/* <ProtectedRoute exact path="/userProfile" component={UserProfile} /> */}
            <ProtectedRoute exact path="/find" component={Find} />
          </Switch>
        </>
  );
}

export default LoggedInLanding;