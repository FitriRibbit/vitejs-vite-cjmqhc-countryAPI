import { useState, useEffect } from 'react'
import axios from 'axios'
import Choice from './component/Choice.jsx'

const App = () => {
  const [country, setCountry] = useState('');
  const [allResult, setAllResult] = useState([]);
  const [filterResult, setFilterResult] = useState([]);

  useEffect(() => {
    // skip if currency is not defined
      axios
        .get('https://studies.cs.helsinki.fi/restcountries/api/all')
        .then((response) => {
          setAllResult(response.data)
        })
    }, [])

  const handleChange = (event) => {
    event.preventDefault();
    
    const currentValue = event.target.value
    setCountry(currentValue);
    if(currentValue) {
      setFilterResult(allResult.filter((result) =>
      result.name.common.toLowerCase().includes(currentValue.toLowerCase()))
      )
    } else {
      setFilterResult([])
    }
  }

  const handleShow = (result) => {
    setFilterResult([result])
    setCountry(result.name.common)
  }

  return (
    <div>
      <div>
        find countries <input value={country} onChange={handleChange} 
        placeholder='Country' autoFocus />
      </div>
        <Choice countries={filterResult} handleShow={handleShow}/>
    </div>
  )
}

export default App;