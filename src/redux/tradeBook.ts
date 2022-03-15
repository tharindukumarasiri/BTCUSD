import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface State {
    data: number[][]
}

const tradeBookSlice = createSlice({
    name: "tradeBook",
    initialState: {
        data: [[]]
    },
    reducers: {
        bookCreated(state: State, { payload }: PayloadAction<number[][]>) {
            state.data = payload;
        },
        bookUpdated(state: State, { payload }: PayloadAction<number[]>) {
            const index = state.data.findIndex((data) => data[0] === payload[0])
            if(index < 0 ){
                state.data.push(payload)
            } else {
                state.data[index] = payload
            }

        }

    }
})

export const { bookCreated, bookUpdated } = tradeBookSlice.actions;
export default tradeBookSlice.reducer;
