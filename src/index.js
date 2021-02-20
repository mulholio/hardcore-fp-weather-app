import { API_KEY } from './key';

const CITY = 'London,uk'

const ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}`

fetch(ENDPOINT)
  .then(res => res.json())
  .then(x => console.log(x))
