
import React, { useState } from 'react';



export default function SearchForm(props){

    

    const [state, setState] = useState({
       jobTitle: '',
       location: '', 
    });

   

        const handleInput = (e) =>{
            setState({
                ...state,
                [e.target.name]:e.target.value
            })

        }

        
        function handleSubmit(e) {
            e.preventDefault();
            props.handleFormSubmit(state.jobTitle,state.location)
        }
     
   
    return(
        <form autoComplete="off" onSubmit={handleSubmit}>
        <input name="jobTitle" placeholder="Job Title" value={state.jobTitle}  onChange={handleInput}/>
        <input name="location" placeholder="Location" value={state.location}  onChange={handleInput}/>
        <button type="submit">Find</button>
        </form>
    )
}


