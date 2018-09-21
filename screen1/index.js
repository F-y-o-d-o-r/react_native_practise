import { createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import Details from '../screen2/Details';
import { HOME, DETAILS } from '../routes';
import Page3 from '../screen3/Screen3';

export default createStackNavigator(
  {
    Home: HomeScreen,
    Details: Details,
    Page3: Page3
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
);
