import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./features/pokemonSlice";
import { logActions, reportError } from "./middlewares";

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }).concat(logActions).concat(reportError),
});
