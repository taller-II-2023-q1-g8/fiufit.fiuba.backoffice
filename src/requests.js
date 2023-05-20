const fetchData = async (url) =>  
  fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    mode: 'cors'
  });

export const fetchUserByEmail = async (email) => (
  await fetchData(
    `https://api-gateway-k1nl.onrender.com/user/with_email/${email}`
  ).then((response) => response.json())
)

export const fetchAllUsernames = async () => (
  await fetchData(
    'https://api-gateway-k1nl.onrender.com/user/usernames'
  ).then((response) => response.json())
)

export const fetchUserByUsername = async (username) => (
  await fetchData(
    `https://api-gateway-k1nl.onrender.com/user/?username=${username}`
  ).then((response) => response.json())
)

export const fetchAllUsers = async () => (
  await fetchData(
    'https://api-gateway-k1nl.onrender.com/user/'
  ).then((response) => response.json())
)

export const fetchAllPlans = async () => (
  await fetchData(
    'https://api-gateway-k1nl.onrender.com/plans/'
  ).then((response) => response.json())
)

export const registerAdmin = async (data) => (
  await fetch('https://api-gateway-k1nl.onrender.com/user', {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    mode: 'cors',
    body: JSON.stringify(data)
  })
);
