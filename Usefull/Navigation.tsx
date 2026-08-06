import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// Import your Views
import HomeView from '../Usefull/src/view/HomeView';

const RootStack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: HomeView,
    },
  },
});

export const Navigation = createStaticNavigation(RootStack);