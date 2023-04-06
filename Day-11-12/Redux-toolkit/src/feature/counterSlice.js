import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    count: 0,
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    // reducers will be generated into actions but they will exist as reducers. check clg(counterSlice)
    reducers: {
        increment: (state, action) => {
            state.count += 1
            // doesn't actually mutate the state, but detect changes to draft state and produce brand new immutable state based on the changes.
        },
        decrement: (state, action) => {
            state.count -= 1
        }
    }
})
// console.log(counterSlice)
// {name: ..., actions: {}, caseReducers: {}, reducer: f, getInitialState: f}
export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer