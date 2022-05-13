import React, { useState } from 'react'

const SearchBar = () => {
  const [country, setCountry] = useState('')
  
  const submitHandler = (event) => {
    event.preventDefault()
  }

  const inputChangeHandler = (event) => {
    setCountry(event.target.value)
    
  }
  return (
    <div className="w-11/12 px-10 md:w-auto inline-flex justify-start items-center bg-white dark:bg-darkElements rounded-md shadow-sm">
      <span className="mt-1">
        <ion-icon name="search" class="h-5 w-5 text-lightInput dark:text-white" />
      </span>

      <form onSubmit={submitHandler}>
        <input type="text" onChange={inputChangeHandler} value={country} placeholder="Search for a country..." className="w-80 p-4 font-nunito font-light outline-none bg-white dark:bg-darkElements text-lightInput placeholder:text-lightInput dark:text-white dark:placeholder:text-white" />
      </form>
    </div>
  )
}

export default SearchBar