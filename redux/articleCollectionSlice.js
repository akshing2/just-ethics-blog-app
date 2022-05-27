// @brief: slicer to update the collection of articles from the backend
// articleCollection refers to the entriesCollection as per contnentful documentation
// https://contentful.github.io/contentful.js/contentful/9.1.18/Entities.html#.EntryCollection

import { createSlice } from '@reduxjs/toolkit';

// import contentful calls to run requests
import { getAllArticleEntries } from '../Services/contentfulApi';

export const articleCollectionSlice = createSlice({
  name: 'articleCollection',
  initialState: {
    items: [], // array of entries as per contentful documentation
  },
  reducers: {
    updateArticleCollection: async (state) => {
      // when all entries are received, update the items array
      const entries = await getAllArticleEntries();
      state.items = entries.items;
    },
    emptyArticleCollection: (state) => {
      // remove all items if needed
      state.items = [];
    },
  },
});

// export actions
export const { updateArticleCollection, emptyArticleCollection } =
  articleCollectionSlice.actions;
// export reducer
export default articleCollectionSlice.reducer;
