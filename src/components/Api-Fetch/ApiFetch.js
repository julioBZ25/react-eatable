import { BASE_URL } from "../config"

export default function searchDishes(endpoint){
  return fetch(BASE_URL + endpoint).then(response => response.json()).then(data => data)
}