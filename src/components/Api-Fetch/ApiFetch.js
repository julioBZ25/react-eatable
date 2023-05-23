import { BASE_URL } from "../config"

function searchDishes(endpoint){
  return fetch(BASE_URL + endpoint).then(response => response.json()).then(data => data)
}

async function createDish(endpoint, values){
  const content = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  }

  console.log(content)
  const response = await fetch(BASE_URL + endpoint, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  });

  let data;
  if (!response.ok) {
    data = await response.json();
    throw data
  }

  try {
    data = await response.json();
  } catch ( error) {
    data = response.statusText;
  }

  return data;
}

async function editDish(endpoint, values){
  const content = {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  }

  const response = await fetch(BASE_URL + endpoint, content);
  
  let data;
  if (!response.ok) {
    data = await response.json();
    throw data
  }

  try {
    data = await response.json();
  } catch ( error) {
    data = response.statusText;
  }

  return data;
}

async function deleteDish(endpoint){
  const content = {
    method: "DELETE",
  }

  const response = await fetch(BASE_URL + endpoint, content);
}

export { searchDishes, createDish, editDish, deleteDish}
