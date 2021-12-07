// route to get logged in user's info (needs the token)
export const getUser = (token) => {
  return fetch("/api/users/user", {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
};

// route to get login user's info
export const loginUser = (userData) => {
  return fetch("/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(userData),
  });
};

// create new User document
export const createUser = (userData) => {
  return fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(userData),
  });
};

// Update values of existing user document
export const updateUser = (token) => {
  return fetch("/api/users/user", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
};

// add Journal data for a user 
export const createJournal = (journalData, token) => {
    return fetch('/api/users/journal', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
        },
            body: JSON.stringify(journalData),
    });
};


// add group data for a user (auth)
export const addGroup = (groupData, token) => {
  return fetch("/api/users", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(groupData),
  });
};

// add provider data for a user (auth)
export const addProvider = (providerData, token) => {
  return fetch("/api/users", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(providerData),
  });
};

// Todo:
// updateUser
// createJournal

// export const addJournal = ( ??? ) => {
//     return fetch('/')
// }
