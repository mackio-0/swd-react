import { createContext, useContext, useEffect, useReducer, useState } from "react"
import { reducer } from "./reducer"

const StateContext = createContext();

export const StateContextProvider = ({children}) => {
    
    const [productList, setProductList] = useState([])

    useEffect(() => {
        fetchData();
    }, [])
    
    useEffect(() => {
        dispatch({type: "GET_PRODUCTS", payload: productList})
    }, [productList])

    const fetchData = async() => {
        const api = await fetch('https://fakestoreapi.com/products')
        const data = await api.json()
        setProductList(data)
    }

    const initialState = {
        products: [],
        cart: []
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const data = {state, dispatch}

    return (
        <StateContext.Provider value={data} >
            {children}
        </StateContext.Provider>
    )
}

export const StateContextCustom = () => useContext(StateContext);