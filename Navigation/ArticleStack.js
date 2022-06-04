// @brief: stack navigator for articles
import { createStackNavigator } from '@react-navigation/stack';
import { ArticleScreen } from '../Screens/ArticleScreen';
import { ArticleFeed } from '../Screens/ArticleFeed';

const Stack = createStackNavigator();

export const ArticleStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='ArticleFeed'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='ArticleFeed' component={ArticleFeed} />
      <Stack.Screen name='ArticleScreen' component={ArticleScreen} />
    </Stack.Navigator>
  );
};
