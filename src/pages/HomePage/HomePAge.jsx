import React, { useState, useEffect } from "react";
import "./HomePage.css";
import SearchForm from "../../components/SearchForm/SearchForm";
import Header from "../../components/PageHeader/PageHeader";
import Icons from "../../components/Icons/Icons";
import SearchResults from "../../components/SearchResults/SearchResults";



export default function HomePage({handleLogout}) {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");

  function handleFormSubmit(title, location) {
    setJobTitle(title);
    setLocation(location);
  }

  useEffect(() => {
    console.log(jobTitle, location, "this is the jobtitle and location");

    const searchURl = `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=3c28107a&app_key=b350f92eaecc52697e668c777ba06f6b&what_and=${jobTitle}&where=${location}&sort_by=relevance`;

    const makeApiCall = () => {
      fetch(searchURl)
        .then((res) => res.json())
        .then((data) => {
          console.log("searchResults", data);
          setSearchResults(data.results);
         setLoading(false)
     });
    };
    makeApiCall();
  }, [jobTitle, location]);

  return (
    <body class='home-body' >
      <div class='background'>
      <Header  handleLogout={handleLogout} />
      <h1>...Your Perfect Job is Waiting</h1>
      <SearchForm handleFormSubmit={handleFormSubmit} />
      </div>
      {loading ? null : <SearchResults jobs={searchResults} /> } 
      <Icons />
    </body>
  );
}
