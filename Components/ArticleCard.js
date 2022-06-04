// @ brief: this is a component to render a touchable card to open a selected article
import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { selectArticleId } from '../redux/articleCollectionSlice';
import FastImage from 'react-native-fast-image';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const ArticleCard = ({
  title,
  subtitle,
  category,
  image,
  id,
  navigation,
}) => {
  const dispatch = useDispatch();

  const onPressHandler = () => {
    console.log('Opening article id: ', id);
    dispatch(selectArticleId(String(id)));
    navigation.navigate('ArticleScreen');
  };

  return (
    <TouchableOpacity
      style={[styles.btnContainer, styles.shadow]}
      onPress={onPressHandler}
    >
      <View style={styles.contentContainer}>
        <FastImage source={{ uri: image }} style={styles.thumbnailStyle} />
        <View style={{ flex: 0.65 }}>
          <View style={styles.textContainer}>
            <Text style={styles.titleStyle}> {title} </Text>
            <Text style={styles.subtitleStyle}> {subtitle} </Text>
            <CategoryBanner category={category} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

// component to render category banner that lives within ArticleCard
const CategoryBanner = ({ category }) => {
  return (
    <View
      style={[
        styles.categoryBanner,
        category === 'Intro to Ethics'
          ? styles.introToEthics
          : category === 'Modern Problems'
          ? styles.modernProblems
          : styles.reflections,
      ]}
    >
      <Text style={styles.categoryStyle}> {category} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: '#fff',
    margin: 5,
    borderRadius: 20,
    height: 100,
    width: 350,
    borderColor: '#747473',
    borderWidth: 1,
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
    flex: 0.35,
    height: 80,
    padding: 10,
    borderRadius: 10,
  },
  titleStyle: {
    fontSize: RFPercentage(2.1),
    paddingBottom: RFPercentage(0.75),
    color: '#9a3131',
  },
  subtitleStyle: {
    fontSize: RFPercentage(1.75),
    paddingBottom: RFPercentage(0.75),
    color: '#2c2c2c',
  },
  categoryBanner: {
    //backgroundColor: '#942727',
    padding: 5,
    alignSelf: 'flex-start',
    borderRadius: 5,
  },
  introToEthics: {
    backgroundColor: '#942727',
  },
  reflections: {
    backgroundColor: '#7c7c74',
  },
  modernProblems: {
    backgroundColor: '#4d77eb',
  },
  categoryStyle: {
    fontSize: RFPercentage(1.25),
    color: 'white',
  },
  shadow: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
