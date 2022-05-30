import React from 'react';

import store from './redux/store';
import { Provider } from 'react-redux';
import { ArticleFeed } from './Screens/ArticleFeed';

const App = () => {
  return (
    <Provider store={store}>
      <ArticleFeed />
    </Provider>
  );
};

export default App;
