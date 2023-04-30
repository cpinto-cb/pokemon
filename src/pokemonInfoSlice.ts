import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export const pokemonInfoSlice = createSlice({
    name: 'pokemonInfo',
    initialState: {
        pokemonInfoUrl: ''
    },
    reducers: {
        setPokemonInfoUrl: (state, action: PayloadAction<string> ) => {
            state.pokemonInfoUrl = action.payload
        }
    }
})

export default pokemonInfoSlice
