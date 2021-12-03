import React, { useState, useEffect } from 'react';
// // External fetch to the google books api endpoint still managed in utils/API, not server implementation
// import { searchGooglePlaces } from '../utils/api';

function TherapySearch() {
    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    // const [items, setItems] = useState([]);

    // const handleFormSubmit = async (event) => {
    //   event.preventDefault();
      
    //   // Catch if there wasn't any data provided by the user in the search form
    //   if (!searchData) {
    //     return false;
    //   }
    
    //   try {
    //     // pass through search field data including location and types
    //     const response = await searchGoogleAPI(searchData);

    //     if (!response.ok) {
    //       throw new Error('We encountered an error completing your search.')
    //     }

    //     // convert api response to a JSON object
    //     const { items } = await response.json();

    //     //placeholder to avoid error
    //     console.log(items);

    //   }
    // },
    //Commented this out while we continue work on the API logic, so that the abb will build in the meanwhile
    // useEffect(() => {
        
    //         .then(res => res.json())
    //         .then(
    //         (result) => {
    //             setIsLoaded(true);
    //             setItems(result);
    //         },
    //         (error) => {
    //             setIsLoaded(true);
    //             setError(error);
    //         }
    //         )
    // }, [])
  
    // if (error) {
    //   return <div>Error: {error.message}</div>;
    // } else if (!isLoaded) {
    //   return <div>Loading...</div>;
    // } else {
    //   return (
    //     <ul>
    //       {items.map(item => (
    //         <li key={item.id}>
    //           {item.name} {item.price}
    //         </li>
    //       ))}
    //     </ul>
    //   );
    // }
    return (
      <div>
          <h1>HOME page placeholder</h1>
      </div>
  );
}

export default TherapySearch();