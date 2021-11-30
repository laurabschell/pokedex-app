import { configureStore } from "@reduxjs/toolkit";
import pokemonTypesReducer from "../features/PokemonTypes/PokemonTypesSlice";

export const store = configureStore({
  reducer: {
    pokemonTypes: pokemonTypesReducer,
  },
});
