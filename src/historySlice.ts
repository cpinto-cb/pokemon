
import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { History } from "./History";

export const historySlice = createSlice({
    name: 'history',
    initialState: {
        history: [] as History[],
    },
    reducers: {
        addHistory: (state, action: PayloadAction<History> ) => {
            const newPayload = action.payload;
            state.history = [newPayload, ...state.history];
        }
    }
})

export default historySlice
