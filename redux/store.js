// @brief: redux store for global state management

import { configureStore } from '@reduxjs/toolkit';
import articleCollectionReducer from './articleCollectionSlice';

export default configureStore({
  reducer: {
    articleCollection: articleCollectionReducer,
  },
});
