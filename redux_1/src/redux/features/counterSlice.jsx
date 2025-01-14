import { createSlice } from "@reduxjs/toolkit";

const initialState ={ count: 0}
const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        reset: (state, action) => {
            state.count = action.payload.value;
        }
    }

});

export const { increment, decrement, reset } = counterSlice.actions

export default counterSlice.reducer;
