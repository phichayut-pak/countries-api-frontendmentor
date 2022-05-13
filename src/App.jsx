import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom"
import Countries from './pages/Countries'
import NavigationBar from './components/NavigationBar'
import SearchBar from './components/SearchBar'
import FilterButton from './components/FilterButton'

const CountriesDetail = React.lazy(() => import('./pages/CountriesDetail'))

const App = () => {

  return(
    <div className='min-h-screen bg-lightBg dark:bg-darkBg'>
      <NavigationBar></NavigationBar>
      <div className="mt-10">
        <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center ml-4 space-y-10 md:space-y-0 md:mx-36">
          <SearchBar></SearchBar>
          <FilterButton></FilterButton>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Navigate to="/countries" replace />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/countries/:countryName" element={<CountriesDetail />}  />
        <Route path="*" />
      </Routes>
    </div>
  )
}

export default App