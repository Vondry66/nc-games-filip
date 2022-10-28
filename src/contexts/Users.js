import { createContext } from 'react'
import { useState } from 'react'

export const UserContext = createContext()

export const UserProvider = (props) => {
const [loggedInUser, setLoggedInUser] = useState({})
const isLoggedIn = Object.keys(loggedInUser).length > 0




return <UserContext.Provider value={{loggedInUser, setLoggedInUser, isLoggedIn}}>
    {props.children}
</UserContext.Provider>
}