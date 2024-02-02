import OneCountry from './OneCountry.jsx'
import Results from './Results.jsx'

const Choice = ({countries, handleShow}) => {
  //let filtered = [];

  /*if(country.length > 0) {
    filtered = result.filter((result) =>
      result.name.common.toLowerCase().includes(country.toLowerCase())
    );
  } else {
    filtered = result
  }*/

  if(countries.length > 10) {
    return (
      <div>
        <p>Too many matches, please specify another filter</p>
      </div>
    )
  } else if(countries.length > 1){
    return (
      <ul>
        {countries.map((result) => 
          <Results key={result.ccn3} result={result} handleShow={handleShow}/>)}
      </ul>
    )
  } else if (countries.length === 1) {
    const [result] = countries;
    return (
      <div>
        <OneCountry result={result} />
      </div>
    )
  } else {
    return null
  }
}

export default Choice;