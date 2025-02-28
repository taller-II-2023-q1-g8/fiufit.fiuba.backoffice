const API_KEY = "mn3YK1ijws0ThRpUn19N3SPlkTgUfXg7";
if (API_KEY == null) {
  console.log("No API KEY in Environment Variables.");
  process.exit(-1);
}

const fetchData = async (url) =>
  fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Fiu-Fit-Auth": API_KEY,
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

export const fetchAdminByUsername = async (username) =>
  await fetchData(
    `https://api-gateway-k1nl.onrender.com/user/admin/?username=${username}`
  ).then((response) => response.json());

export const fetchAllUsernames = async () =>
  await fetchData("https://api-gateway-k1nl.onrender.com/user/usernames").then(
    (response) => response.json()
  );

export const fetchUserByUsername = async (username) =>
  await fetchData(
    `https://api-gateway-k1nl.onrender.com/user/?username=${username}`
  ).then((response) => response.json());

export const fetchBlockedStatusByUsername = async (username) =>
  await fetchData(
    `https://api-gateway-k1nl.onrender.com/user/blocked/${username}`
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

export const fetchAllVerifications = async () =>
  await fetchData("https://api-gateway-k1nl.onrender.com/verifications").then(
    (response) => response.json()
  );

export const fetchAllPlans = async () =>
  await fetchData("https://api-gateway-k1nl.onrender.com/plans/").then(
    (response) => response.json()
  );

export const fetchPlanById = async (id) =>
  await fetchData(`https://api-gateway-k1nl.onrender.com/plans/${id}`).then(
    (response) => response.json()
  );

export const fetchAllServices = async () =>
  await fetchData(`https://api-gateway-k1nl.onrender.com/services/list`).then(
    (response) => response.json()
  );

export const verifyTrainer = async (id) =>
  await fetch(
    `https://api-gateway-k1nl.onrender.com/verifications/${id}/verify`,
    {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Fiu-Fit-Auth": API_KEY,
      },
      mode: "cors",
    }
  ).then((response) => response.json());

export const rejectTrainer = async (id) =>
  await fetch(
    `https://api-gateway-k1nl.onrender.com/verifications/${id}/reject`,
    {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Fiu-Fit-Auth": API_KEY,
      },
      mode: "cors",
    }
  ).then((response) => response.json());

export const registerAdmin = async (data) =>
  await fetch("https://api-gateway-k1nl.onrender.com/user", {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Fiu-Fit-Auth": API_KEY,
    },
    mode: "cors",
    body: JSON.stringify(data),
  });

export const registerService = async (name, description) =>
  await fetch(
    `https://api-gateway-k1nl.onrender.com/services/add?name=${name}&description=${description}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Fiu-Fit-Auth": API_KEY,
      },
      mode: "cors",
    }
  );

export const blockUser = async (userToBlock, adminUsername) =>
  await fetch(
    `https://api-gateway-k1nl.onrender.com/user/block/${userToBlock}/${adminUsername}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Fiu-Fit-Auth": API_KEY,
      },
      mode: "cors",
    }
  );

export const unblockUser = async (userToUnblock) =>
  await fetch(
    `https://api-gateway-k1nl.onrender.com/user/unblock/${userToUnblock}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Fiu-Fit-Auth": API_KEY,
      },
      mode: "cors",
    }
  );

export const blockService = async (name) =>
  await fetch(`https://api-gateway-k1nl.onrender.com/services/block/${name}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Fiu-Fit-Auth": API_KEY,
    },
    mode: "cors",
  });

export const unblockService = async (name) =>
  await fetch(
    `https://api-gateway-k1nl.onrender.com/services/activate/${name}`,
    {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Fiu-Fit-Auth": API_KEY,
      },
      mode: "cors",
    }
  );

export const blockPlan = async (planID) =>
  fetch(`https://api-gateway-k1nl.onrender.com/plans/${planID}/block/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Fiu-Fit-Auth": API_KEY,
    },
    mode: "cors",
    body: JSON.stringify({ blocked: true }),
  });

export const unblockPlan = async (planID) =>
  fetch(`https://api-gateway-k1nl.onrender.com/plans/${planID}/block/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Fiu-Fit-Auth": API_KEY,
    },
    mode: "cors",
    body: JSON.stringify({ blocked: false }),
  });

