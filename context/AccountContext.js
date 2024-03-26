import React, { createContext, useContext, useState } from 'react'

const accountContext = createContext();
const AccountContext = ({children}) => {
    const [isLogin, setIsLogin] = useState(false);
    const [isRegister, setIsRegister] = useState(false);
    const [profile, setProfile] = useState({});
    return (
        <accountContext.Provider 
            value={{isLogin, setIsLogin, isRegister, setIsRegister, profile, setProfile}}
        >
            {children}
        </accountContext.Provider>
    )
}

export const useLogin = () => useContext(accountContext);

export default AccountContext;