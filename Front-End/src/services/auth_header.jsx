// This module exports a function that returns the authorization header
export const authHeader = () => {
  // Retrieves the "user" object from the local storage and parses it
  const user = JSON.parse(localStorage.getItem("user"));

  // Checks if the user and user token exist
  if (user && user.token) {
    // Returns an object with the authorization header containing the user token
    return { Authorization: "Bearer " + user.token };
  } else {
    // Returns an empty object if the user or user token is missing
    return {};
  }
};
