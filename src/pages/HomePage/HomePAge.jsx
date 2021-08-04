import React from 'react';
import './HomePage.css';

export default function HomePage() {
   return (
       <body>
           <nav>
               <ul>
                   <h3>The Hiring Lab</h3>
                   <li><a>About</a></li>
                   <a href='/myprofile' >My Profile</a>
                   <a>Post Job</a>
                   <a href='/login'>Log In</a>
               </ul>
           </nav>
           <h1>...Your Perfect Job is Waiting</h1>
           <form>
            <input type='text' value='Key word... Job title'/><input type='text' value="Location"/><button>Find</button>
           </form>  
           <div class="icon">
               <section>
                   <img class='search' src=" "/>
                   <p>Search for your perfect job by using key words or job title</p>
               </section>
               <section>
                    <img class='apply' src=" "/>
                    <p>Easily apply and keep track of all the jobs you've applied to</p>
               </section>
               <section>
                    <img class='job_post' src=""/>
                    <p>Post a job listing to find your perfect candidate</p>
               </section>
           </div>
       </body>
       
   )
}