
import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { History } from "./History";

export const deckSlice = createSlice({
    name: 'history',
    initialState: {
        history: [] as History[],
    },
    reducers: {
        addHistory: (state, action: PayloadAction<History> ) => {
            const newPayload = {date: new Date().toLocaleString(), ...action.payload }
            state.history = [newPayload, ...state.history];
        }
    }
})

export default deckSlice
