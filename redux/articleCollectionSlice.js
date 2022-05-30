// @brief: slicer to update the collection of articles from the backend
// articleCollection refers to the entriesCollection as per contnentful documentation
// https://contentful.github.io/contentful.js/contentful/9.1.18/Entities.html#.EntryCollection

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// import contentful calls to run requests
import { getContentfulClient } from '../Services/contentfulApi';

// Async Thunks to fetch all articles from contentful backend
// refactored from contenfulApi function to fetch all entries
export const fetchAllArticleEntries = createAsyncThunk(
  'articleCollection/fetchAllArticleEntries',
  async () => {
    const client = await getContentfulClient();
    try {
      const entries = await client.getEntries();
      console.log('Contentful Entries Recieved in Thunk!: ', entries.total);
      return entries.items;
    } catch (e) {
      console.warn('Contentful fetch ERROR: ', e);
      return e;
    }
  }
);

const initialState = {
  entries: [], // array of entries as per contentful documentation
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const articleCollectionSlice = createSlice({
  name: 'articleCollection',
  initialState,
  reducers: {
    resetArticleCollection: (state) => {
      // reset to initial state
      state.articleCollection.entries = [];
      state.articleCollection.status = 'idle';
      state.articleCollection.error = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAllArticleEntries.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchAllArticleEntries.fulfilled, (state, action) => {
        state.status = 'succeeded';
        console.log('Actions Payload: ', action.payload);
        state.entries = action.payload;
        state.error = null;
      })
      .addCase(fetchAllArticleEntries.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
        console.warn(
          'Failed to fetch all article entries: ',
          action.error.message
        );
      });
  },
});

// export selectors
export const getArticleEntries = (state) => state.articleCollection.entries;
export const getArticleEntriesStatus = (state) =>
  state.articleCollection.status;
export const getArticleEntriesError = (state) => state.articleCollection.error;
// export actions
export const { emptyArticleCollection } = articleCollectionSlice.actions;
// export reducer
export default articleCollectionSlice.reducer;
