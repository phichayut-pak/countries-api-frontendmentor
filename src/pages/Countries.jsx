import Card from "../components/Card"
import axios from 'axios'
import { useEffect, useState } from "react"

const Countries = () => {
  const [countries, setCountries] = useState([])
  useEffect(() => {
    axios.get('https://restcountries.com/v2/all')
      .then(data => setCountries(data.data))

  }, [])

  

  return(
    <div className="grid grid-cols-1 md:grid-cols-4 justify-items-center content-center mt-10 gap-y-5 md:gap-y-10 mx-[5.5rem]">
      {countries && countries.map(country => {
        return <Card img={country.flags.png} title={country.name} population={country.population} region={country.region} capital={country.capital} key={country.alpha2Code} />
      })}

    </div>
    
  )
}



export default Countries