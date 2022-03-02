import React, {createContext, useReducer} from 'react'
import authState from './initialStates/authState'
import contactState from './initialStates/contactState'
import auth from './reducers/auth'
import contacts from './reducers/contact'

export const GlobalContext = createContext({})
const GlobalProvider = ({children}) => {
   const[authData, authDispatch] = useReducer(auth, authState)
   const[contactsData, contactsDispatch] = useReducer(contacts, contactState)
    return <GlobalContext.Provider value={{authData, contactsData, authDispatch, contactsDispatch}}>{children}</GlobalContext.Provider>

}
export default GlobalProvider;