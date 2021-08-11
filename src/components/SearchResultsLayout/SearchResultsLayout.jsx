import React from 'react';
import * as bookMarkAPI from '../../utils/bookmark';





export default function SearchResultsLayout(results){


    async function handleAddBookMark(bookMark){
        const data = await bookMarkAPI.create(bookMark)
        console.log(data)
    }
   
   function handleClick(){
        console.log(
            {
                    redirect_url: results.job.redirect_url,
                    title: results.job.title,
                    label: results.job.category.label,
                    location: results.job.location.display_name,
                    description: results.job.description
        
                }
        )
      handleAddBookMark({
            redirect_url: results.job.redirect_url,
            title: results.job.title,
            label: results.job.category.label,
            location: results.job.location.display_name,
            description: results.job.description

        })
        
    }
    console.log(results)
    return(
        <div class="searchResults" >
           <a href={results.job.redirect_url}><h3>{results.job.title}</h3></a>
           <h4>{results.job.category.label}</h4>
           <h4>{results.job.location.display_name}</h4>  
           <p>{results.job.description}</p> 
         <button onClick={handleClick} class="bookmark_button">Book Mark</button>
        </div>
    )
 }