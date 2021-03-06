/*
    @brief: This component renders the article content for a seletced article
*/

import React from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  useWindowDimensions,
} from 'react-native';
import {
  getSelectedArticleId,
  getArticleEntries,
} from '../redux/articleCollectionSlice';
import { useSelector } from 'react-redux';
import FastImage from 'react-native-fast-image';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import RenderHTML, { defaultSystemFonts } from 'react-native-render-html';
import { BLOCKS } from '@contentful/rich-text-types';

// options for rich text render
const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      // this option adds the https portion of the string to the image url
      // without it, images will not render.
      `<img src="https:${node.data.target.fields.file.url}" alt="${node.data.target.fields.title}" />`;
    },
  },
};

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
  // window width for responsiveness
  const { width } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.safeContainer} edges={['top']}>
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContentContainer}
      >
        <FastImage
          style={styles.articleThumbnail}
          source={{
            uri: article.thumbnailUrl,
            priority: FastImage.priority.normal,
            cache: FastImage.cacheControl.immutable,
          }}
        />
        <View style={styles.bodyContainer}>
          <Text style={styles.title}>{article.title}</Text>
          <Text style={styles.subtitle}>{article.subtitle}</Text>
        </View>
        <RenderHTML
          baseStyle={styles.bodyContainer}
          source={{
            html: documentToHtmlString(article.body, options),
          }}
          contentWidth={width - 20}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#942727', // background color of top bar
  },
  scrollContainer: {
    width: '100%',
    backgroundColor: '#f5f0ed',
  },
  scrollContentContainer: {
    alignItems: 'flex-start',
    width: '100%',
  },
  articleThumbnail: {
    width: '100%',
    height: 225,
  },
  textContainer: {
    paddingHorizontal: 10,
  },
  // TODO: need to create styles for different text types
  title: {
    fontSize: RFPercentage(4),
    color: '#942727',
    paddingVertical: 10,
  },
  subtitle: {
    fontSize: RFPercentage(2.5),
    color: '#7c7c74',
  },
  bodyContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
});
