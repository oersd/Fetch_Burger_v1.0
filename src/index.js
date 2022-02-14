// GET/POST/PUT requests
// https://my-burger-api.herokuapp.com/burgers
import { getData } from "./modules/fetchCall.js"

const burgerDisplay = document.querySelector('.name')
const ingredients = document.querySelector('.ingredients')
const button = document.querySelector('.button')

let url = 'https://my-burger-api.herokuapp.com/burgers'

async function randomBurger() {
  try {
    const data = await getData(url)
    const randomNumber = Math.random() * data.length
    const randomInteger = Math.floor(randomNumber)
    burgerDisplay.innerHTML = data[randomInteger].name
    ingredients.innerHTML = data[randomInteger].ingredients.join('<br>')
  }
  catch (error) {
    console.log(error.message);
  }
}

button.addEventListener('click', randomBurger)