import { createContext, useState, useMemo } from 'react';

export const AppContext = createContext(null);

const initialState = {
    welcome: false,
}

export const AppContextProvider = ({ children }) => {
    const [ state, setState ] = useState(initialState);

    const values = useMemo(() => ({ state, setState }), [ state ]); 

    return (
        <AppContext.Provider value={values}>
            { children }
        </AppContext.Provider>
    )
}