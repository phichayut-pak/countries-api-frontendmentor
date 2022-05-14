import Card from "../components/Card"
import axios from 'axios'
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { countriesActions } from "../store/features/countries"

const Countries = () => {
  const dispatch = useDispatch()
  const countries = useSelector(state => state.countries.countries)

  useEffect(() => {
    const fetchData = async () => {
      axios.get('https://restcountries.com/v2/all')
      .then(data => data.data)
      .then((data) => data.sort(() => Math.random() - 0.5 ))
      .then((data) => dispatch(countriesActions.setCountries(data)))
      .catch(err => console.log(`ERROR IN COUNTRIES.JSX {${err}}`))
    }
    
    fetchData()
    
  }, [dispatch])

  

  return(
    <div className="min-h-screen flex justify-center items-center">
      {countries.length === 0 ? <div className="font-nunito font-bold text-2xl mb-56 text-black dark:text-white">Loading...</div> : (
        <div className="grid grid-cols-1 md:grid-cols-4 justify-items-center md:justify-items-stretch content-center mt-10 gap-x-28 gap-y-5 md:gap-y-10 mx-36">
          {countries && countries.map(country => {
            return <Card img={country.flags.png} title={country.name} population={country.population} region={country.region} capital={country.capital} key={country.alpha2Code} />
          })}
        </div>
      )}
      
    </div>
  )
}



export default Countries