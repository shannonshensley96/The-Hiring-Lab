import React from 'react';
import {Link} from 'react-router-dom';



export default function Header({handleLogout}){
    return(
    <nav> 
        <ul>
            <Link to='/'><h3>The Hiring Lab</h3></Link>
            <Link>About</Link>
            <Link to='/myprofile'>My Profile</Link> 
            <Link to='/login'>Log In</Link>
            <Link to='/' onClick={handleLogout}>Logout</Link>
        </ul>
    </nav>
    )
}





          