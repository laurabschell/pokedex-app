import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPokemonTypes = createAsyncThunk(
  "types/getPokemonTypes",
  async (dispatch, getState) => {
    return await fetch("https://pokeapi.co/api/v2/type/").then((res) =>
      res.json()
    );
  }
);

console.log(getPokemonTypes);

const initialState = {
  pokemonTypes: [],
  status: null,
};

const PokemonTypesSlice = createSlice({
  name: "types",
  initialState,
  extraReducers: {
    [getPokemonTypes.pending]: (state, action) => {
      state.status = "loading";
    },
    [getPokemonTypes.fulfilled]: (state, action) => {
      state.status = "success";
      state.pokemonTypes = action.payload;
    },
    [getPokemonTypes.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default PokemonTypesSlice.reducer;
