import { createContext, useState, useMemo } from 'react';

export const AppContext = createContext(null);

const initialState = {
    welcome: true,
    currentChat: null,
}

export const AppContextProvider = ({ children }) => {
    const [ chatStatus, setChatStatus ] = useState(initialState);

    const values = useMemo(() => ({ chatStatus, setChatStatus }), [ chatStatus ]); 

    return (
        <AppContext.Provider value={values}>
            { children }
        </AppContext.Provider>
    )
}