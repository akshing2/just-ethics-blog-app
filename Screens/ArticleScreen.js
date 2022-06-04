/*
    @brief: This component renders the article content for a seletced article
*/

import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import {
  getSelectedArticleId,
  getArticleEntries,
} from '../redux/articleCollectionSlice';
import { useSelector } from 'react-redux';
import FastImage from 'react-native-fast-image';
import { SafeAreaView } from 'react-native-safe-area-context';

// @params:
//  articleId -> (string) contentfu article id used to load content.
export const ArticleScreen = () => {
  // selected article id
  const selectedArticleId = useSelector(getSelectedArticleId);
  // selected article
  const entries = useSelector(getArticleEntries);
  const article = entries.filter((entry) => {
    return entry.id === selectedArticleId;
  })[0];

  return (
    <SafeAreaView style={styles.safeContainer} edges={['top']}>
      <ScrollView style={styles.scrollContainer}>
        <FastImage
          style={styles.articleThumbnail}
          source={{
            uri: article.thumbnailUrl,
            priority: FastImage.priority.normal,
            cache: FastImage.cacheControl.immutable,
          }}
        />
        <Text> Loading Article: {article.title} </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#942727',
    alignItems: 'center',
    flexDirection: 'column',
  },
  scrollContainer: {
    width: '100%',
    backgroundColor: '#f5f0ed',
  },
  articleThumbnail: {
    width: '100%',
    height: 225,
  },
  textContainer: {
    flex: 0.8,
    justifyContent: 'flex-start',
  },
  // TODO: need to create styles for different text types
  text: {
    fontSize: 24,
    margin: 10,
  },
});
