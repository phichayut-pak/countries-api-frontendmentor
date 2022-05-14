import React, { Suspense } from 'react'
import { Routes, Route, Navigate } from "react-router-dom"
import Countries from './pages/Countries'
import NavigationBar from './components/NavigationBar'


const CountriesDetail = React.lazy(() => import('./pages/CountriesDetail'))

const App = () => {

  return(
    <div className='min-h-screen bg-lightBg dark:bg-darkBg'>
      <NavigationBar></NavigationBar>

      <Suspense fallback={<div className='pt-[23rem] flex justify-center items-center font-nunito font-bold text-2xl text-black dark:text-white'>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Navigate to="/countries" replace />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/countries/:countryName" element={<CountriesDetail />}  />
          <Route path="*" />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App