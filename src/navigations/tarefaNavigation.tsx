import { createStackNavigator, createAppContainer } from 'react-navigation';
import React from 'react';
import {Text} from 'react-native';
import TarefaScreen from '../screens/tarefa';
import TarefaEdicaoScreen from '../screens/tarefa-edicao';

const navigation = createStackNavigator({
    tarefaHome:TarefaScreen,
    tarefaEditar: TarefaEdicaoScreen
}, {
    initialRouteName: 'tarefaHome',
    defaultNavigationOptions: {
        header: null
    }
})

export default createAppContainer(navigation);
