/*
    @brief: This component renders the article content for a seletced article
*/

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// @params:
//  articleId -> (string) contentfu article id used to load content.
export const ArticleScreen = ({ articleId }) => {
  return (
    <View style={styles.container}>
      <Text> Loading Article: {articleId} </Text>
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
