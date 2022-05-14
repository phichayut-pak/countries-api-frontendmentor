import { useParams } from "react-router-dom"

const CountryDetail = () => {
  const params = useParams()
  const { countryName } = params
  return (
    <div>
      { countryName }
    </div>
  )
}

export default CountryDetail