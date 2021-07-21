import React, {createContext, useReducer} from "react"
import AppReducer from './AppReducer'


const initialState = {
    transactions: []
}

//Create context 

export const GlobalContext = createContext(initialState)
export const GlobalProvider = ( { children } ) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    function deleteTransaction (id) {
        dispatch({
            type:'DELETE_TRANSACTION',
            payload: id
        })
    }
    function addTransaction (id) {
        dispatch({
            type:'ADD_TRANSACTION',
            payload: id
        })
    }
    return(<GlobalContext.Provider value={{
        transactions: state.transactions, 
        deleteTransaction, addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}