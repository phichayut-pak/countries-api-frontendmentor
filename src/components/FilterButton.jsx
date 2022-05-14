import React from 'react'
import { Popover } from '@headlessui/react'
import { useDispatch } from 'react-redux'
import { countriesActions } from '../store/features/countries'

const FilterButton = () => {
  const dispatch = useDispatch()

  return (
    <div className=''>
      <Popover className='relative bg-white dark:bg-darkElements p-4 rounded-md shadow-sm'>
        <Popover.Button className='font-nunito inline-flex justify-center items-center text-black dark:text-white'>
          <span className='pl-2'>Filter By Region</span>
          <ion-icon class="ml-2 pl-7" name="chevron-down"></ion-icon>
        </Popover.Button>

        <Popover.Panel className="absolute shadow-sm bg-white dark:bg-darkElements left-0 py-3 rounded-md mt-6">
          {({ close }) => (
            <div>
              <button className='pl-5 pr-32 py-1 font-nunito font-semibold text-black dark:text-white' onClick={() => {
                  dispatch(countriesActions.filterCountries('Africa'))
                  close()
              }}>Africa</button>
              <button className='pl-5 pr-32 py-1 font-nunito font-semibold text-black dark:text-white' onClick={() => {
                  dispatch(countriesActions.filterCountries('Americas'))
                  close()
              }}>Americas</button>
              <button className='pl-5 pr-32 py-1 font-nunito font-semibold text-black dark:text-white' onClick={() => {
                  dispatch(countriesActions.filterCountries('Asia'))
                  close()
              }}>Asia</button>
              <button className='pl-5 pr-32 py-1 font-nunito font-semibold text-black dark:text-white' onClick={() => {
                  dispatch(countriesActions.filterCountries('Europe'))
                  close()
              }}>Europe</button>
              <button className='pl-5 pr-32 py-1 font-nunito font-semibold text-black dark:text-white' onClick={() => {
                  dispatch(countriesActions.filterCountries('Oceania'))
                  close()
              }}>Oceania</button>
          </div>
          )}
        </Popover.Panel>
      </Popover>
    </div>
  )
}



export default FilterButton