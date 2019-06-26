import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Header } from 'react-native-elements';
import MenuButton from '../../components/headerButton';
import MyHeader from '../../components/MyHeader';

export interface AppProps {
    navigation:any;
}

export interface AppState {
}

export default class ConfiguracoesGeralScreen extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
        <View>
            <MyHeader title="Configurações Gerais" hasMenuButton={true} navigation={this.props.navigation}/>
            <Text>Configurações Gerais</Text>
        </View>
    );
  }
}
