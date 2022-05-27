import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ArticleFeed } from './Screens/ArticleFeed';
import { Loader } from './Components/Loader';
import { contentfulClient } from './Services/contentfulApi';
import { getAllArticleEntries } from './Services/contentfulApi';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  let articles = getAllArticleEntries();

  useEffect(() => {
    if (articles) setIsLoading(false);
  });
  return isLoading ? <Loader /> : <ArticleFeed />;
}
