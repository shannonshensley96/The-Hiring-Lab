import React, {  useEffect } from "react";
import userService from '../../utils/userService';
import { useParams } from "react-router-dom";
import {Grid,  Segment } from 'semantic-ui-react';
import Header from "../../components/PageHeader/PageHeader";
import './MyProfile.css';

export default function ProfilePage({ user, handleLogout}){

  return (
      <body class='myprofile'>
    <Header />
    <Grid textAlign='center' columns={2} class="profile">
        <Grid.Row>
           <Grid.Column style={{ maxWidth: 350 }}>
               <Segment>
                 <h3>{user.firstName} {user.lastName}</h3>
               </Segment>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column style={{ maxWidth: 350 }}>
                <Segment>
                    <h5>
                        {user.email}
                    </h5>
                </Segment>
            </Grid.Column>
        </Grid.Row>
    </Grid>
    <div>
        <h2>Book Marked Jobs:</h2>
    </div>
    
    </body>
  )
}