import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// Import your Views
import HomeView from '../Usefull/src/view/HomeView';
import CalculatorView from '../Usefull/src/view/CalculatorView';
import AgendaView from '../Usefull/src/view/AgendaView';
import ClockView from '../Usefull/src/view/ClockView';
import GPSView from '../Usefull/src/view/GPSView';
import NotesView from '../Usefull/src/view/NotesView';
import TasksView from '../Usefull/src/view/TasksView';

const RootStack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: HomeView,
      options: {
        headerShown: false,
      },
    },
    Calculator: {
      screen: CalculatorView,
      options: {
        headerShown: false,
      },
    },
    Agenda: {
      screen: AgendaView,
      options: {
        headerShown: false,
      },
    },
    Clock: {
      screen: ClockView,
      options: {
        headerShown: false,
        theme: 'dark',

      },
    },
    GPS: {
      screen: GPSView,
      options: {
        headerShown: false,
      },
    },
    Notes: {
      screen: NotesView,
      options: {
        headerShown: false,
      },
    },
    Tasks: {
      screen: TasksView,
      options: {
        headerShown: false,
      },
    },
  },
});
export type RootStackParamList = {
  Home: undefined;
  Calculator: undefined;
  Agenda: undefined;
  Clock: undefined;
  GPS: undefined;
  Notes: undefined;
  Tasks: undefined;
};

export const Navigation = createStaticNavigation(RootStack);