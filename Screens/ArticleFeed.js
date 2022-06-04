/*
    @brief: This screen displays the search bar,
    category filters and article selector
*/

import React, { useEffect } from 'react';
import { StyleSheet, View, StatusBar, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Loader } from '../Components/Loader';
import { Banner } from '../Components/Banner';
import { ArticleSelector } from '../Components/ArticleSelector';
import { SearchBar } from '../Components/SearchBar';
import {
  getArticleEntriesStatus,
  fetchAllArticleEntries,
} from '../redux/articleCollectionSlice';
import { SafeAreaView } from 'react-native-safe-area-context';

export const ArticleFeed = ({ navigation }) => {
  // define article entries stuff
  const dispatch = useDispatch();
  const articleEntriesStatus = useSelector(getArticleEntriesStatus);

  //useEffect to get all articles if status is idle
  useEffect(() => {
    if (articleEntriesStatus === 'idle') dispatch(fetchAllArticleEntries());
  }, [articleEntriesStatus, dispatch]);

  return (
    <SafeAreaView style={styles.safeContainer} edges={['top']}>
      <StatusBar barStyle='light-content' />
      <View style={styles.viewContainer}>
        <SearchBar />
        {/* <TextInput placeholder='stuff' /> */}
        {articleEntriesStatus === 'idle' ? (
          <Loader />
        ) : (
          <ArticleSelector navigation={navigation} />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    color: '#c00404',
  },
  safeContainer: {
    flex: 1,
    backgroundColor: '#942727',
  },
  viewContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f0ed',
    flex: 1,
    width: '100%',
    height: '100%',
  },
  text: {
    color: 'black',
  },
});
