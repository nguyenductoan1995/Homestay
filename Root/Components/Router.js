import React from 'react'
import {StackNavigator,TabNavigator,DrawerNavigator} from 'react-navigation';

import Main from './Screens/Main';
import Wellcome from './Screens/Wellcome';
import Menu from './Screens/Menu';

export const HomeStack = StackNavigator({
    ManHinh_Wellcome:{
        screen:Wellcome,
        navigationOptions:{
            title:'Wellcome'
        }
    },
  ManHinh_Home:{
    screen: Main,
    navigationOptions:{
      title:'Home'
    }
  },
});
export const SideMenu =DrawerNavigator({
  HomeStack:{
    screen:HomeStack
  },

},
{
  drawerWidth: 300,
  drawerPosition: 'left',
  contentComponent: props => <Menu {...props} />
}
);
