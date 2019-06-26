import * as React from 'react';
import { View, StyleSheet, Text, Button, FlatList, Alert } from 'react-native';
import MyHeader from '../components/MyHeader';
import {connect} from 'react-redux';
import TarefaItem from '../components/tarefaItem';

interface AppProps {
  navigation: any;
  usuario:string
}

interface AppState {
  tarefas: {id:string, descricao:string, data:string}[]
}

export class TarefaScreen extends React.Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      tarefas:[
        {id:"123", descricao:'Teste 1', data:'05/11/2019'},
        {id:"122", descricao:'Teste 2', data:'22/11/2019'},
        {id:"124", descricao:'Teste 3', data:'18/11/2019'},
      ]
    };
  }

  public render() {
    return (
      <View>
          <MyHeader hasMenuButton={true} title={'Tarefas -' + this.props.usuario} navigation={this.props.navigation}></MyHeader>
          <Text>Tarefa - </Text>
          <FlatList 
            data={this.state.tarefas}
            renderItem={({item}) => {
              return (<TarefaItem tarefa={item} onEditar={(t) => this.props.navigation.navigate('tarefaEditar', {tarefaID: t.id})} onExcluir={(id) => Alert.alert(id)} />)
            }
          }
            keyExtractor={(t) => t.id}
          />

          <Button title="Novo" onPress={() => this.props.navigation.navigate('tarefaEditar')}></Button>
          <Button title="Editar" onPress={() => this.props.navigation.navigate('tarefaEditar', {id:'123'})}></Button>

      </View>
    );
  }
}

const mapStoreToProps = (store) => ({
  usuario: store.usuarios.email
})

export default connect(mapStoreToProps, null) (TarefaScreen)
