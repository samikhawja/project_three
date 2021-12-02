import React, { useState, useEffect } from 'react';
require('dotenv').config();

console.log(process.env);

function Therapy() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        const api_key = process.env.API_KEY;
        fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=37.759185,-122.427304&radius=40235&types=doctor&name=addiction_therapy&key=${api_key}`)
            .then(res => res.json())
            .then(
            (result) => {
                setIsLoaded(true);
                setItems(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
            )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.name} {item.price}
            </li>
          ))}
        </ul>
      );
    }
}

export default Therapy();