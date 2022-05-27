/*
    @brief: loader component which runs while feed is being fetched.
*/

import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

export const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
