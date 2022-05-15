import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import React, { useState, useEffect } from 'react'
import BackButton from "../components/BackButton";
import BorderButton from '../components/BorderButton'

const CountryDetail = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { countryName } = params;

  const countries = useSelector((state) => state.countries.countries);
  const [countryInfo, setCountryInfo] = useState({
    title: "",
    nativeName: "",
    population: "",
    region: "",
    subregion: "",
    capital: "",
    topLevelDomain: "",
    currencies: "",
    languages: "",
    borders: "",
    flags: ""
  })

  useEffect(() => {
    if(countries.length !== 0) {
      const selectedCountries = countries.find(
        (country) => country.name === countryName
      );

      const languageArray = []
      for(const item of selectedCountries.languages.map(language => language.name)) {
        languageArray.push(item.toString())
      }
      
      

      setCountryInfo({
        title: selectedCountries.name,
        nativeName: selectedCountries.nativeName,
        population: selectedCountries.population,
        region: selectedCountries.region,
        subregion: selectedCountries.subregion,
        capital: selectedCountries.capital,
        topLevelDomain: selectedCountries.topLevelDomain,
        currencies: selectedCountries.currencies.map(currency => currency.name),
        languages: languageArray.join(', '),
        borders: !selectedCountries.borders ? '' : Object.values(selectedCountries.borders).map(border => <BorderButton border={border} key={border.toString()} />),
        flags: selectedCountries.flag
      })
      
    } else {
      navigate('/countries')
    }
  }, [countries, countryName, navigate])    
  
  // console.log(countryInfo.languages.map(country => country.name))
  const backButtonHandler = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className="m-10">
        <BackButton backButton={backButtonHandler} />
      </div>

      <div className="m-10 grid grid-rows-2 grid-flow-col justify-items-center gap-y-10 md:grid-cols-2 md:grid-flow-row"> 
        <div id="countryImage" className="">
          <img src={countryInfo.flags} alt={countryInfo.title} className="h-[100%] " />
        </div>


        <div className="md:ml-36 pt-10 flex flex-col justify-start items-center place-self-start pr-10">
          <div id="title" className="font-nunito font-extrabold text-2xl md:text-3xl text-black dark:text-white place-self-start">
            {countryInfo.title}
          </div>

          <div id="blog-1" className="pt-10 place-self-start space-y-3">
            <div id="nativeName" className="font-nunito font-light text-black dark:text-white">
              <span className="font-bold">Native Name: </span>{countryInfo.nativeName}
            </div>
            <div id="population" className="font-nunito font-light text-black dark:text-white">
              <span className="font-bold">Population: </span>{countryInfo.population}
            </div>
            <div id="region" className="font-nunito font-light text-black dark:text-white">
              <span className="font-bold">Region: </span>{countryInfo.region}
            </div>
            <div id="subregion" className="font-nunito font-light text-black dark:text-white">
              <span className="font-bold">Sub Region: </span>{countryInfo.subregion}
            </div>
            <div id="capital" className="font-nunito font-light text-black dark:text-white">
              <span className="font-bold">Capital: </span>{countryInfo.capital}
            </div>
          </div>


          <div id="blog-2" className="pt-10 place-self-start space-y-3">
            <div id="topLevelDomain" className="font-nunito font-light text-black dark:text-white">
              <span className="font-bold">Top Level Domain: </span>{countryInfo.topLevelDomain}
            </div>
            <div id="currencies" className="font-nunito font-light text-black dark:text-white">
              <span className="font-bold">Currencies: </span>{countryInfo.currencies}
            </div>
            <div id="languages" className="font-nunito font-light text-black dark:text-white">
              <span className="font-bold">Languages: </span> {countryInfo.languages}
            </div>
          </div>

          <div id="border" className="pt-10 place-self-start space-x-5 font-nunito font-bold text-xl text-black dark:text-white">
            Border Countries:
            <span className="block mt-4 space-x-5">{countryInfo.borders}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
