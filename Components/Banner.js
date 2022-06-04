// @brief: simple header component for the status bar
import React from 'react';
import { StyleSheet, View, StatusBar, Text } from 'react-native';

export const Banner = () => {
  return (
    <View style={styles.banner}>
      <StatusBar barStyle='light-content' />
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    flex: 0.065,
    backgroundColor: '#942727',
    width: '100%',
  },
});
