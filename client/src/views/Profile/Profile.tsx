import React, { useState } from "react";
import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './style.css';

import { useAuth0 } from "@auth0/auth0-react";


const Profile: React.FC = (): JSX.Element => {
  const user:any  = useAuth0();
  // const { name, picture, email } = user;

  return (
    <div>
        <Container className="bg">
        <div className="col-md-2 mb-3">
          <img
            src={user.user.picture}
            alt="Profile"
          />
        </div>
        <div>
          <h2>{user.user.name}</h2>
          <p>{user.user.email}</p>
        </div>
        <Link to="/editprofile">Edit Profile</Link>
      </Container>
      <div>
        {/* <pre>
          {JSON.stringify(user, null, 2)}
        </pre> */}
      </div>
    </div>
  );
};

export default Profile;