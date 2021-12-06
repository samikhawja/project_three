require('dotenv').config();

// query is a placeholder for location data generated from the form that needs to be passed into the url ${query}
export const searchGooglePlaces = (query) => {
    const api_key = process.env.API_KEY;
    return fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=37.759185,-122.427304&radius=40235&types=doctor&name=addiction_therapy&key=${api_key}`)

};

export const getUser = (token) => {
    return fetch('/api/users/me', {
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
        },
    });
};

export const loginUser = (userData) => {
    return fetch('/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        
        body: JSON.stringify(userData),
    });
};

export const createUser = (userData) => {
    return fetch('/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        
        body: JSON.stringify(userData),
    });
};

// add group data for a user (auth)
export const addGroup = (groupData, token) => {
    return fetch('/api/users', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
        },
            body: JSON.stringify(groupData),
    });
};

// add provider data for a user (auth)
export const addProvider = (providerData, token) => {
    return fetch('/api/users', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
        },
            body: JSON.stringify(providerData),
    });
};

// Todo:
// updateUser
// createJournal