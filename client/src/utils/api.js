require('dotenv').config();

// query is a placeholder for location data generated from the form that needs to be passed into the url ${query}
export const searchGooglePlaces = (query) => {
    const api_key = process.env.API_KEY;
    return fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=37.759185,-122.427304&radius=40235&types=doctor&name=addiction_therapy&key=${api_key}`)

};