import { configureStore } from '@reduxjs/toolkit'
import { deckSlice } from "./deckSlice";
import historySlice from "./historySlice";
import pokemonInfoSlice from "./pokemonInfoSlice";
export const store = configureStore({
    reducer: {
        pokemonDeck: deckSlice.reducer,
        historyTable: historySlice.reducer,
        pokemonInfo: pokemonInfoSlice.reducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch