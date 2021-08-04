
import React, { useState } from 'react';



export default function SearchForm(props){

    const [jobTitle, setJobTitle]= useState("");

        function handleInput(e){
            setJobTitle(e.target.value);
        }
        function handleSubmit(e) {
            e.preventDefault();
            props.handleFormSubmit(jobTitle);
        }
   
    return(
        <form onSubmit={handleSubmit}>
        <input id="JobTitle" type="text" value="Job Title" value={jobTitle} onChange={handleInput}/>
        <input id="location" type="text" value="Location"/>
        <button type="submit">Find</button>
        </form>
    );
}