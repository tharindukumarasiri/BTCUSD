import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface State {
    data: number[][]
}

const tradesSlice = createSlice({
    name: "trades",
    initialState: {
        data: [[]]
    },
    reducers: {
        tradesCreated(state: State, { payload }: PayloadAction<number[][]>) {
            state.data = payload;
        },
        tradesUpdated(state: State, { payload }: PayloadAction<number[]>) {
            const index = state.data.findIndex((data) => { if (data[0] === payload[0] && data[1] === payload[1] && data[2] === payload[2] && data[3] === payload[3]) return true })
            if (index === -1){
                state.data.push(payload)
            }
        }

    }
})

export const { tradesCreated, tradesUpdated } = tradesSlice.actions;
export default tradesSlice.reducer;
