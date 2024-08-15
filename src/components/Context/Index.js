import React, { useState,createContext } from 'react'

const Data = createContext();
const Index = ({children}) => {
    const [da,setDa] = useState({})
    const login = (userData) => {
        setDa(userData);
      };
    return (
        <Data.Provider value={{ da,login }}>
            {children}
        </Data.Provider>

    )
}

export { Index, Data };