import React, {useState} from 'react';
import SearchResultsLayout from '../SearchResultsLayout/SearchResultsLayout';
import * as bookMarkAPI from '../../utils/bookmark'

export default function SearchResults ({jobs,searchResults}){
  
    async function handleAddBookMark(bookMark){
        const data = await bookMarkAPI.create(bookMark)
        console.log(data)
    }

  
    return(
        <div>
            
            {jobs.map((job)=>{
                
                return(
                    <>

                    <SearchResultsLayout  
                    job={job}
                    id = {job.id}
                    />
                    </>
                  );
             })}
             
        </div>
    )
    
    
    
 
   
}