import React from 'react';

import store from './redux/store';
import { Provider } from 'react-redux';
import Providers from './Providers';

const App = () => {
  return (
    <Provider store={store}>
      <Providers />
    </Provider>
  );
};

export default App;
