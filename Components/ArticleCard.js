// @ brief: this is a component to render a touchable card to open a selected article
import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const ArticleCard = ({ title, subtitle, category, image, id }) => {
  const onPressHandler = () => {
    console.log('Opening article id: ', id);
  };

  return (
    <TouchableOpacity style={styles.btnContainer} onPress={onPressHandler}>
      <View style={styles.contentContainer}>
        <FastImage source={{ uri: image }} style={styles.thumbnailStyle} />
        <View style={styles.textContainer}>
          <Text style={styles.titleStyle}> {title} </Text>
          <Text style={styles.subtitleStyle}> {subtitle} </Text>
          <Text style={styles.categoryStyle}> {category} </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: '#dedede',
    margin: 5,
    borderRadius: 20,
    height: 100,
    width: 350,
  },
  contentContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  textContainer: {
    flexDirection: 'column',
    paddingLeft: 10,
    flexShrink: 1,
  },
  thumbnailStyle: {
    //flex: 0.4,
    width: 80,
    height: 80,
    padding: 10,
    borderRadius: 10,
  },
  titleStyle: {
    fontSize: RFPercentage(2.5),
    paddingBottom: 5,
  },
  subtitleStyle: {
    fontSize: RFPercentage(2),
    paddingBottom: 3,
  },
  categoryStyle: {
    fontSize: RFPercentage(1),
  },
});
