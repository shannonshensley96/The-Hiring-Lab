import React, {useState} from 'react';
import SearchResultsLayout from '../SearchResultsLayout/SearchResultsLayout';


export default function SearchResults ({jobs,searchResults}){
  
  

  
    return(
        <div>
            
            {jobs.map((job)=>{
                
                return(
                    <>

                    <SearchResultsLayout  
                    job={job}
                
                    />
                    </>
                  );
             })}
             
        </div>
    )
    
    
    
 
   
}