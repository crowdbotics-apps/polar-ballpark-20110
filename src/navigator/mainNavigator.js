import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps99002Navigator from '../features/Maps99002/navigator';
import Add-Item99001Navigator from '../features/Add-Item99001/navigator';
import Maps98997Navigator from '../features/Maps98997/navigator';
import UserProfile98993Navigator from '../features/UserProfile98993/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps99002: { screen: Maps99002Navigator },
Add-Item99001: { screen: Add-Item99001Navigator },
Maps98997: { screen: Maps98997Navigator },
UserProfile98993: { screen: UserProfile98993Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
