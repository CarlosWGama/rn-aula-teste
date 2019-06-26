import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MyHeader from '../components/MyHeader';

export interface AppProps {
  navigation:any;
}

export interface AppState {
}

export default class TarefaEdicaoScreen extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    const tarefaID = this.props.navigation.getParam('tarefaID', null);



    return (
      <View>
          <MyHeader hasBackButton={true} title={tarefaID != null ? 'Tarefa Edição' : 'Nova Tarefa'} navigation={this.props.navigation}></MyHeader>
          <Text>Tarefa Edição</Text>
      </View>
    );
  }
}
