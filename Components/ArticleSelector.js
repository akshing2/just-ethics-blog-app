/*
    @brief: This screen displays a scrollable list of all available to read blogs
*/

import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {
  getArticleEntries,
  getArticleEntriesStatus,
  getArticleEntriesError,
  fetchAllArticleEntries,
} from '../redux/articleCollectionSlice';

export const ArticleSelector = () => {
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
    <SafeAreaView style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={articleEntries}
        renderItem={({ item }) => (
          <Text style={styles.text}> {item.title} </Text>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
