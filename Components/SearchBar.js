// @brief: this component enables user to search for articles based on title

import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import AntDesignIcon from '@expo/vector-icons/AntDesign';

export const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder={'Seacrh Articles...'} style={styles.textInput} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#f5f0ed',
    width: '100%',
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  textInput: {
    flex: 0.85,
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#7c7c74',
    color: '#7c7c74',
    width: '100%',
    alignItems: 'flex-start',
  },
});
