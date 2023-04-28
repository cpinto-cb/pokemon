
import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { PokemunCard } from "./Card";

export const deckSlice = createSlice({
    name: 'deck',
    initialState: {
        cards: [] as PokemunCard[],
    },
    reducers: {
        addToDeck: (state, action: PayloadAction<PokemunCard> ) => {
            state.cards = [action.payload, ...state.cards];
        },
        setDeck: (state, action: PayloadAction<PokemunCard[]> ) => {
            state.cards = action.payload;
        },
        clearDeck: (state) => {
            state.cards = []
        },
    },
})

export default deckSlice
