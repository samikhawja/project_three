import React from 'react';
import useFetch from "react-fetch-hook";

// require('dotenv').config();

function TherapySearch() {
  const { isLoading, error, data } = useFetch("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=37.759185,-122.427304&radius=40235&types=doctor&name=addiction_therapy&key=AIzaSyC23nfE1PhzLbG546fR0JtV9PrwJg8iyMY")

  if (isLoading) return "Loading...";
  if (error) return "Error!";
  console.log(data.results)


  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

export default TherapySearch;