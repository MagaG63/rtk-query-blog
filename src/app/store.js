import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from "../services/postsApi";

const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (defMiddlware) => defMiddlware().concat(postsApi.middleware),
});

export default store;
