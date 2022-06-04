import React from 'react';

import store from './redux/store';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { ArticleStack } from './Navigation/ArticleStack';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ArticleStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
