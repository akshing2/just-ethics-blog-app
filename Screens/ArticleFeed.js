/*
    @brief: This screen displays a scrollable list of all available to read blogs
*/

import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {
  getArticleEntries,
  getArticleEntriesStatus,
  getArticleEntriesError,
  fetchAllArticleEntries,
} from '../redux/articleCollectionSlice';

export const ArticleFeed = () => {
  // define article entries stuff
  const dispatch = useDispatch();
  const articleEntries = useSelector(getArticleEntries);
  const articleEntriesStatus = useSelector(getArticleEntriesStatus);
  const articleEntriesError = useSelector(getArticleEntriesError);

  //useEffect to get all articles if status is idle
  useEffect(() => {
    if (articleEntriesStatus === 'idle') dispatch(fetchAllArticleEntries());
  }, [articleEntriesStatus, dispatch]);

  return (
    <View style={styles.container}>
      <Text>This is the article Feed</Text>
      <StatusBar style='auto' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
