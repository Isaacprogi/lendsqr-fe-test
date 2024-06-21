import * as React from 'react'
import { AuthContextType } from '../utils/types/interface_and_types';




export const AuthContext = React.createContext<AuthContextType | null>(null)

export const AuthProvider = ({children}:{children:any}) => {
 const [auth,setAuth] = React.useState<boolean>(false)
 
 const login =() =>{
      setAuth(true)
 }
 const logout = ()=> setAuth(false)

    return <AuthContext.Provider value={{auth,login,logout}}>
               {children}
         </AuthContext.Provider>
}
