import React, { createContext } from 'react'

const ContextApi = ({children}) => {

const themeContext=createContext()
const [dark,setDark]=useState("dark")
const [light,setLight]=useState("light")

  return (
     
     <themeContext.Provider value={{dark,light,setDark,setLight}}>
        {children}
     </themeContext.Provider>
     
  )
}

export default ContextApi
