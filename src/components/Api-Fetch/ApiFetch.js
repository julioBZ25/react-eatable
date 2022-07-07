import React from "react"

export default function searchDishes(endpoint){
  return fetch(BASE_URL + endpoint).then(response => response.json())
}