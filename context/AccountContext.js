import React, { createContext, useContext, useState } from 'react'

export const accountContext = createContext();
const AccountContext = ({children}) => {
    const [isLogin, setIsLogin] = useState(false);
    const [email, setEmail] = useState("");
    const [firstname, setFirstname] =useState("");
    const [lastname, setLastname] =useState("");
    const [password, setPassword] =useState("");
    const [username, setUsername] =useState("");
    return (
        <accountContext.Provider 
            value={{isLogin, setIsLogin, email, setEmail, firstname, setFirstname, lastname, setLastname, password, setPassword, username, setUsername}}
        >
            {children}
        </accountContext.Provider>
    )
}

export const useLogin = () => useContext(accountContext);

export default AccountContext;