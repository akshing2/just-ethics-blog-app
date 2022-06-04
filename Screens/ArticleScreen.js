/*
    @brief: This component renders the article content for a seletced article
*/

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  getSelectedArticleId,
  getArticleEntries,
} from '../redux/articleCollectionSlice';
import { useSelector } from 'react-redux';
import { getEntry } from '../Services/contentfulApi';
import FastImage from 'react-native-fast-image';
import { Banner } from '../Components/Banner';
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

  useEffect(() => {
    console.log('Article Selected: ', article);
    console.log('thumbnail Url: ', article.thumbnailUrl);
  });
  return (
    <View style={styles.container}>
      <FastImage
        style={styles.articleThumbnail}
        source={{
          uri: article.thumbnailUrl,
          priority: FastImage.priority.normal,
          cache: FastImage.cacheControl.immutable,
        }}
      />
      <Text> Loading Article: {article.title} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f0ed',
    alignItems: 'center',
    flexDirection: 'column',
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
