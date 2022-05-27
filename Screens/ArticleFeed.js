/*
    @brief: This screen displays a scrollable list of all available to read blogs
*/

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

export const ArticleFeed = () => {
  return (
    <View style={styles.container}>
      <Text>This is the article field</Text>
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
