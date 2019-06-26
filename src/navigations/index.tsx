import React from 'react';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from './../screens/login';
import TarefaScreen from './../screens/tarefa';
import DrawerMenu from './../navigations/drawerMenu';

const navigation = createSwitchNavigator({
  login: {
    screen: LoginScreen,
    navigationOptions: {
      title: 'Login',
      header: null
    }
  },
  home: {
    screen: DrawerMenu,
    navigationOptions: {
      title: 'Tarefas'
    }
  }
}, {
  initialRouteName: 'login'
})

export default createAppContainer(navigation);