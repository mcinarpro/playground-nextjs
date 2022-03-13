import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../../app/store";

export const selectKanyeQuote = (state: RootState) => state.kanyeQuote;

export const kanyeQuoteSelector = createSelector(selectKanyeQuote, (state) => state);
