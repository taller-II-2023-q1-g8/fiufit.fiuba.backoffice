const fetchData = async (url) =>
  fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    mode: "cors",
  });

export const fetchUserByEmail = async (email) =>
  await fetchData(
    `https://api-gateway-k1nl.onrender.com/user?email=/${email}`
  ).then((response) => response.json());

export const fetchAdminByEmail = async (email) =>
  await fetchData(
    `https://api-gateway-k1nl.onrender.com/user/admin/?email=${email}`
  ).then((response) => response.json());

export const fetchAllUsernames = async () =>
  await fetchData("https://api-gateway-k1nl.onrender.com/user/usernames").then(
    (response) => response.json()
  );

export const fetchUserByUsername = async (username) =>
  await fetchData(
    `https://api-gateway-k1nl.onrender.com/user/?username=${username}`
  ).then((response) => response.json());

export const fetchAllUsers = async () =>
  await fetchData("https://api-gateway-k1nl.onrender.com/user/").then(
    (response) => response.json()
  );

export const fetchAllAdmins = async () =>
  await fetchData("https://api-gateway-k1nl.onrender.com/user/admin").then(
    (response) => response.json()
  );

export const fetchAllAthletes = async () =>
  await fetchData("https://api-gateway-k1nl.onrender.com/athletes").then(
    (response) => response.json()
  );

export const fetchAllTrainersVerifications = async () =>
  await fetchData(
    "https://api-gateway-k1nl.onrender.com/trainers" /*-verifications*/
  ).then((response) => response.json());
export const fetchAllPlans = async () =>
  await fetchData("https://api-gateway-k1nl.onrender.com/plans/").then(
    (response) => response.json()
  );

export const fetchPlanById = async (id) =>
  await fetchData(`https://api-gateway-k1nl.onrender.com/plans/${id}`).then(
    (response) => response.json()
  );

export const verifyTrainer = async (id) =>
  await fetch(`https://api-gateway-k1nl.onrender.com/trainers/${id}/verify`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    mode: "cors",
  });

export const rejectTrainer = async (id) =>
  await fetch(`https://api-gateway-k1nl.onrender.com/trainers/${id}/reject`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    mode: "cors",
  });
export const registerAdmin = async (data) =>
  await fetch("https://api-gateway-k1nl.onrender.com/user", {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify(data),
  });
