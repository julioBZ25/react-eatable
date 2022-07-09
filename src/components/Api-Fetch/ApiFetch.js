import { BASE_URL } from "../config"

function searchDishes(endpoint){
  return fetch(BASE_URL + endpoint).then(response => response.json()).then(data => data)
}

async function createDish(endpoint, values){
  const content = {
    method: 'POST',
    header: {
      'Content-Type': 'application/json',
    },
    body: 
      JSON.stringify(values)
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

export { searchDishes, createDish }