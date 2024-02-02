import { useState, useEffect } from 'react'
import axios from 'axios'

const OneCountry = ({result}) => {
  const keys = Object.values(result.languages)
  const [weather, setWeather] = useState('');
  const [temprature, setTemprature] = useState('');
  const [icon, setIcon] = useState('//cdn.weatherapi.com/weather/64x64/day/116.png');
  const [wind, setWind] = useState('');
  const apiKey = import.meta.env.VITE_KEY_WEATHER
  const city = result.capital
  const weatherLink = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`

  useEffect(() => {
      axios
        .get(weatherLink)
        .then(response => {
          //const apiCurrent = response.data.current
          setTemprature(response.data.current.temp_c)
          setWeather(response.data.current.condition.text)
          setIcon(response.data.current.condition.icon)
          setWind(response.data.current.wind_mph)
        })
    }, [result.capital])

  return (
    <div>
      <h1>{result.name.common}</h1>
      <p>Capital: {result.capital}</p>
      <p>Area: {result.area}</p>
      <h3>Languages: </h3>
      <ul>
        {keys.map((lang) => (
          <li key={lang}>{lang}</li>))}
      </ul>
      <img src={result.flags.png} alt='flag' height='200' width='250'></img>
      <h2>Weather In {result.capital}</h2>
      <p>temperature {temprature} Celcius</p>
      <p>{weather}</p>
      <img src={icon} alt='Weather icon'></img>
      <p>wind {wind} m/s</p>
    </div>
  )
}

export default OneCountry