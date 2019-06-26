import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import ConfiguracoesGeralScreen from '../screens/configuracoes/configAbaGeral';
import ConfiguracoesInfoScreen from '../screens/configuracoes/configAbaInfo';
import { Icon } from 'react-native-elements'

export default createBottomTabNavigator({
    configGeral: {
        screen: ConfiguracoesGeralScreen,
        navigationOptions: {
            title: 'Geral',
            tabBarIcon: () => (<Icon name="people"></Icon>)
        }
    },
    configInfo: {
        screen: ConfiguracoesInfoScreen,
        navigationOptions: {
            title: 'Info',
            tabBarIcon: () => (<Icon name="add"></Icon>)
        }
    }
});