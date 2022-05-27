import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ArticleFeed } from './Screens/ArticleFeed';
import { Loader } from './Components/Loader';
import { updateArticleCollection } from './redux/articleCollectionSlice';

const Providers = () => {
  const articleCollection = useSelector(
    (state) => state.articleCollection.items
  );

  const dispatch = useDispatch();

  useEffect(() => {
    // get all articles on component load
    dispatch(updateArticleCollection());
  });

  return <ArticleFeed />;
};

export default Providers;
