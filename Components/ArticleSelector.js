/*
    @brief: This screen displays a scrollable list of all available to read blogs
*/

import React from 'react';
import { StyleSheet, Text, FlatList, SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';
import { getArticleEntries } from '../redux/articleCollectionSlice';

import { ArticleCard } from './ArticleCard';

export const ArticleSelector = ({ navigation }) => {
  const articleEntries = useSelector(getArticleEntries);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={articleEntries}
        renderItem={({ item }) => (
          <ArticleCard
            title={item.title}
            subtitle={item.subtitle}
            category={item.category}
            id={item.id}
            image={item.thumbnailUrl}
            navigation={navigation}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#f5f0ed',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
  },
});
