/*
    @brief: This component renders the article content for a seletced article
*/

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// @params:
//  article -> (object) article object from contentful backend.
export const Article = ({ article }) => {
  return (
    <View style={styles.container}>
      <View style={styles.articleThumbnailContainer}>
        {article.articleThumbnail && (
          <Image
            style={styles.articleThumbnail}
            source={article.articleThumbnail.url}
          />
        )}
      </View>
      <View style={styles.articleThumbnailContainer}>
        <Text style={styles.text}>{article.title}</Text>
        <Text style={styles.text}>{article.subtitle}</Text>
        <Text style={styles.text}>{article.title}</Text>
      </View>
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
