
import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { PokemonCard } from "./Card";

export const deckSlice = createSlice({
    name: 'deck',
    initialState: {
        cards: [] as PokemonCard[],
    },
    reducers: {
        addToDeck: (state, action: PayloadAction<PokemonCard> ) => {
            state.cards = [action.payload, ...state.cards];
        },
        setDeck: (state, action: PayloadAction<PokemonCard[]> ) => {
            state.cards = action.payload;
        },
        clearDeck: (state) => {
            state.cards = []
        },
    },
})

export default deckSlice
