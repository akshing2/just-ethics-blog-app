// @brief: this component enables user to search for articles based on title

import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

export const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder={'Seacrh Articles...'} style={styles.textInput} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.065,
    width: '100%',
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  textInput: {
    color: 'black',
    height: 36,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#7c7c74',
    flexDirection: 'row',
    padding: 5,
  },
});
