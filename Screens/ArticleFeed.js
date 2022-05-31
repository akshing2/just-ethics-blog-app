/*
    @brief: This screen displays the search bar,
    category filters and article selector
*/

import React, { useEffect } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Loader } from '../Components/Loader';
import { ArticleSelector } from '../Components/ArticleSelector';
import {
  getArticleEntries,
  getArticleEntriesStatus,
  getArticleEntriesError,
  fetchAllArticleEntries,
} from '../redux/articleCollectionSlice';

export const ArticleFeed = () => {
  // define article entries stuff
  const dispatch = useDispatch();
  const articleEntriesStatus = useSelector(getArticleEntriesStatus);

  //useEffect to get all articles if status is idle
  useEffect(() => {
    if (articleEntriesStatus === 'idle') dispatch(fetchAllArticleEntries());
  }, [articleEntriesStatus, dispatch]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#c00404'} />
      {articleEntriesStatus === 'idle' ? <Loader /> : <ArticleSelector />}
    </View>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    color: '#c00404',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
  },
});
