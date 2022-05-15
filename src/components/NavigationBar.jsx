import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { themeActions } from '../store/features/theme'

const NavigationBar = () => {
  const mode = useSelector(state => state.theme.mode)
  const dispatch = useDispatch()
  
  useEffect(() => {
    const root = window.document.documentElement
    root.classList.add('light') 
    dispatch(themeActions.changeTheme('light'))
  }, [dispatch])

  const changeThemeHandler = () => {
    const root = window.document.documentElement
    const classList = root.classList.value.split(' ')
    const isLight = classList.includes('light')
    
    switch(isLight) {
      case true:
        root.classList.remove('light')
        root.classList.add('dark')
        dispatch(themeActions.changeTheme('dark'))
        break

      case false:
        root.classList.remove('dark')
        root.classList.add('light')
        dispatch(themeActions.changeTheme('light'))
        break
      default:
        root.classList.remove('dark')
        console.log('ERROR IN Navigationbar.jsx')
    }
  }

  return(
    <div className="bg-white dark:bg-darkElements flex justify-between items-center px-4 md:px-36 h-20 shadow-md">
      <Link to="/countries" id="title" className="font-nunito font-extrabold text-xl dark:text-white">
        Where in the world?
      </Link>

      <button onClick={changeThemeHandler} id="toggleTheme" className="font-nunito font-semibold inline-flex items-center outline-none dark:text-white">
        <span className="mt-1 mr-2">
          {mode === 'light' ? <ion-icon name="moon" /> : <ion-icon name="sunny" />}
          </span>
        {mode === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
    </div>
  )
}

export default NavigationBar
