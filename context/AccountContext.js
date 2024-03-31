import React, { createContext, useContext, useState } from 'react'

export const accountContext = createContext();
const AccountContext = ({children}) => {
    const [isLogin, setIsLogin] = useState(false);
    const [isRegister, setIsRegister] = useState(false);
    const [profile, setProfile] = useState({});
    const [email, setEmail] = useState();
    return (
        <accountContext.Provider 
            value={{isLogin, setIsLogin, isRegister, setIsRegister, profile, setProfile, email, setEmail}}
        >
            {children}
        </accountContext.Provider>
    )
}

export const useLogin = () => useContext(accountContext);

export default AccountContext;