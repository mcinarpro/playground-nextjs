import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

export const getKanyeQuote = createAsyncThunk("kanye/kanyeQuote", async () => {
  const response = await axios.get("https://api.kanye.rest/");

  return response.data;
});
