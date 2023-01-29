import { useLayoutEffect } from 'react'
import { useState } from 'react'

const isDarkTheme = window?.matchMedia('prefers-color-scheme: dark').matches
const defaultValue = isDarkTheme ? 'dark' : 'ligth'

export default function useTheme() {
   console.log(isDarkTheme)
   const [theme, setTheme] = useState(localStorage.getItem('app-theme') || defaultValue)
   useLayoutEffect(() => {
      document.documentElement.setAttribute('data-theme', theme)
      localStorage.setItem('app-theme', theme)
   }, [theme])
   return { theme, setTheme }
}
