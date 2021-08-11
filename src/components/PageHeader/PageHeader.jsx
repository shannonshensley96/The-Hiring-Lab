import React from 'react';
import {Link} from 'react-router-dom';



export default function Header({handleLogout}){
    return(
    <nav class='nav'> 
        <ul>
            <Link to='/'><h3 class='hiring-lab'>The Hiring Lab</h3></Link>
            <Link to='/myprofile' class='profile'>My Profile</Link> 
            <Link to='' onClick={handleLogout} class='logout'>Logout</Link>
        </ul>
    </nav>
    )
}





          