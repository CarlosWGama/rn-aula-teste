import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import TarefaScreen from '../screens/tarefa';
import ConfiguracaoScreen from '../screens/configuracao';
import LoginScreen from '../screens/login';
import Menu from './index';
import tarefaNavigation from './tarefaNavigation';
import ConfiguracaoTabMenu from './configuracoesTabNavigation';

//Cria navigação do Drawer Menu
const navigation = createDrawerNavigator({
    home: tarefaNavigation,
    configuracao: {
        screen: ConfiguracaoTabMenu,
        navigationOptions: {
            title: 'Configuração',
        }
    },
    login: {
        screen: LoginScreen,
        navigationOptions: {
            title: 'Sair',
            drawerLockMode: 'locked-closed' //Desabilita o Drawer Menu
        }
    }
}, {
    initialRouteName: 'home'
})

export default createAppContainer(navigation);