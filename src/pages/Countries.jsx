import Card from "../components/Card";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countriesActions } from "../store/features/countries";
import { useNavigate } from "react-router-dom";
import FilterButton from "../components/FilterButton";
import SearchBar from "../components/SearchBar";

const Countries = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  let countries = useSelector((state) => state.countries.countries);
  const searchedBy = useSelector((state) => state.countries.searchedBy);
  const filteredBy = useSelector((state) => state.countries.filteredBy);
  const [initial, setInitial] = useState(0)

  if (searchedBy !== "" && filteredBy === "") {
    countries = countries.filter((country) =>
      country.name.toLowerCase().includes(searchedBy)
    );
  } else if (searchedBy === "" && filteredBy !== "") {
    countries = countries.filter((country) => country.region === filteredBy);
  } else if (searchedBy === "" && filteredBy === "") {
    // countries = countries.filter(country => country.name.toLowerCase().includes(searchedBy) && country.region === filteredBy)
    
  } else {
    countries = countries.filter(country => country.name.toLowerCase().includes(searchedBy) && country.region === filteredBy)
  }

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get("https://restcountries.com/v2/all")
        .then((data) => data.data)
        .then((data) => dispatch(countriesActions.setCountries(data)))
        .then(() => setInitial(1))
        .catch((err) => console.log(`ERROR IN COUNTRIES.JSX {${err}}`));
    };

    fetchData();
  }, [dispatch]);

  let loadingHandler = (
  <div className="min-h-screen flex justify-center items-center font-nunito font-bold text-2xl pb-48 text-black dark:text-white">
    Loading...
  </div>)
  if(initial === 1) {
    loadingHandler = (
      <div className="min-h-screen flex justify-center items-center font-nunito font-bold text-2xl pb-48 text-black dark:text-white">
        Not Found
      </div>
    )
  }

  const cardClickHandler = (country) => {
    navigate(country)
  }
  return (
    <>
      <div className="mt-10">
        <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center ml-4 space-y-10 md:space-y-0 md:mx-36">
          <SearchBar></SearchBar>
          <FilterButton></FilterButton>
        </div>
      </div>
      {countries.length === 0 ? (
        loadingHandler
      ) : (
        <div className={`grid grid-cols-1 md:grid-cols-3 mid:grid-cols-3 larger:grid-cols-4 justify-items-center md:justify-items-stretch content-start mt-10 gap-x-28 gap-y-5 md:gap-y-10 mx-36`}>
          {countries &&
            countries.map((country) => {
              return (
                <Card
                  img={country.flags.png}
                  title={country.name}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                  key={country.alpha2Code}
                  onClick={() => cardClickHandler(country.title)}
                />
              );
            })}
        </div>
      )}
    </>
  );
};

export default Countries;
