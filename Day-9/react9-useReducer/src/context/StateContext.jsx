import { createContext, useContext, useEffect, useReducer, useState } from "react"
import { reducer } from "./reducer"

const StateContext = createContext();

export const StateContextProvider = ({children}) => {
    
    const [search, setSearch] = useState('');

    const [productList, setProductList] = useState([])

    useEffect(() => {
        fetchData();
    }, [])
    
    useEffect(() => {
        dispatch({type: "GET_PRODUCTS", payload: productList})
        const filteredProduct = productList.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));
        dispatch({type: "GET_PRODUCTS", payload: filteredProduct})
    }, [productList, search])

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

    const data = {state, dispatch, search, setSearch}

    return (
        <StateContext.Provider value={data} >
            {children}
        </StateContext.Provider>
    )
}

export const StateContextCustom = () => useContext(StateContext);