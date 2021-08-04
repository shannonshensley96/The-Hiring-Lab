import React from 'react';
import './HomePage.css';
import SearchForm from '../../components/SearchForm/SearchForm';
import Header from '../../components/PageHeader/PageHeader';
import Icons from '../../components/Icons/Icons';

export default function HomePage() {
    const [searchResults, setSearchResults]= useState('')
    const [user, setUser] = useState(userService.getUser()) // getUser decodes our JWT token, into a javascript object
    // this object corresponds to the jwt payload which is defined in the server signup or login function that looks like 
    // this  const token = createJWT(user); // where user was the document we created from mongo
  
    
    function handleFormSubmit(results){
        setSearchResults(results)
      }
    
      useEffect(() => {
  
  
        var searchURl = `https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=3c28107a&app_key=b350f92eaecc52697e668c777ba06f6b&results_per_page=20&sort_dir=down&sort_by=relevance`
            
        const makeApiCall = () => {
          fetch("https://baskarm28-adzuna-v1.p.rapidapi.com/jobs/%7Bus%7D/search/1?app_key=3c28107a&app_key=3c28107a&app_id=b350f92eaecc52697e668c777ba06f6b&app_id=b350f92eaecc52697e668c777ba06f6b&results_per_page=20&location0=location0%3DUK%26location1%3DSouth%20East%20England%26location2%3DSurrey", {
            "method": "GET",
            "headers": {
              "x-rapidapi-key": "SIGN-UP-FOR-KEY",
              "x-rapidapi-host": "baskarm28-adzuna-v1.p.rapidapi.com"
            }
          })
          .then(response => {
            console.log(response);
          })
          .catch(err => {
            console.error(err);
          });
        }
        makeApiCall()
  
      },[])
    
   return (
       <body>
           <Header />
           <h1>...Your Perfect Job is Waiting</h1>
           <SearchForm handleFormSubmit={handleFormSubmit} />
           <Icons />
       </body>
       
   )
}