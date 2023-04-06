import { configureStore } from "@reduxjs/toolkit"
import counterSlice from "../feature/counterSlice"


export const store = configureStore({
    reducer: {
        counter: counterSlice,
        // slice.name : slice's name
    },
})