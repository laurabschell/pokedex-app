import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 pokemonTypes: []
}

const PokemonTypes = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
    
    }
});

export const {} = PokemonTypes.actions
export default PokemonTypes.reducer