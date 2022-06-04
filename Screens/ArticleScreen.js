/*
    @brief: This component renders the article content for a seletced article
*/

import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { getSelectedArticleId } from '../redux/articleCollectionSlice';
import { useSelector } from 'react-redux';
import { getEntry } from '../Services/contentfulApi';

// @params:
//  articleId -> (string) contentfu article id used to load content.
export const ArticleScreen = () => {
  const selectedArticleId = useSelector(getSelectedArticleId);
  const [article, setArticle] = useState(null);
  useEffect(() => {
    const fetchEntry = async () => {
      const entry = await getEntry(selectedArticleId);
      setArticle(entry);
    };

    fetchEntry().catch((e) => {
      console.warn('Error fetching article: ', e);
    });
  }, []);

  useEffect(() => {
    console.log('Article: ', article);
  });

  return (
    <View style={styles.container}>
      <Text> Loading Article: {selectedArticleId} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  articleThumbnailContainer: {
    flex: 0.2,
  },
  articleThumbnail: {
    width: '100%',
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
