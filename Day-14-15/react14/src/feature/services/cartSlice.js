import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    cartItems: [],
    totalAmount: 0,
    quantity: 0,
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, {payload}) => {
            const isAlreadyExisted = state.cartItems.find(item => item.id === payload.id)
            if (isAlreadyExisted) {
                return state
            } else {
                state.cartItems = [...state.cartItems, {...payload, quantity: 1}]
            }
            state.totalAmount += payload.price
            state.quantity++
        },
        removeFromCart: (state, {payload}) => {
            state.cartItems = state.cartItems.filter(item => item.id !== payload.id)
            state.totalAmount -= payload.price * payload.quantity;
            state.quantity -= state.quantity
        },
        addItemsQuantity: (state, {payload}) => {
            state.cartItems = state.cartItems.map((item) => {
                if (item.id === payload.id) {
                    return {...item, quantity: item.quantity + 1 }
                } else {
                    return item
                }
            })

            state.quantity++;
            state.totalAmount += payload.price;

        },
        subtractItemQuantity: (state, {payload}) => {
            state.cartItems = state.cartItems.map(item => {
                if (item.quantity > 0) {
                    if (item.id === payload.id) {
                        return {...item, quantity: item.quantity - 1}
                    } else {
                        return item
                    }
                }
                state.quantity--;
                state.totalAmount -= payload.price * payload.quantity
            })
        }
    }
})

export const { addToCart, removeFromCart, addItemsQuantity, subtractItemQuantity } = cartSlice.actions
export default cartSlice.reducer