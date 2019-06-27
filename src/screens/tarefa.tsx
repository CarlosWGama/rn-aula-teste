import * as React from 'react';
import { View, StyleSheet, Text, Button, FlatList, Alert, ToastAndroid } from 'react-native';
import MyHeader from '../components/MyHeader';
import {connect} from 'react-redux';
import TarefaItem from '../components/tarefaItem';
import { excluirTarefa } from '../store/tarefas/actions';

interface AppProps {
  navigation: any;
  usuario:string;
  tarefas: {id:string, descricao:string, data:string}[];
  excluirTarefa(id):Promise<any>;
}

interface AppState {
  tarefas: {id:string, descricao:string, data:string}[]
}

export class TarefaScreen extends React.Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      tarefas:[ ]
    };
  }

  componentDidMount() {
    this.props.navigation.addListener('didFocus', () => {
      this.setState({tarefas: this.props.tarefas})
    })
  }

  excluirTarefa(id) {
    this.props.excluirTarefa(id).then(() => {
      this.setState({tarefas: this.props.tarefas})
      ToastAndroid.show("Deletado!", 200);
    })
  }

  public render() {
    return (
      <View>
          <MyHeader hasMenuButton={true} title={'Tarefas -' + this.props.usuario} navigation={this.props.navigation}></MyHeader>
          <Text>Tarefa - </Text>
          <FlatList 
            data={this.state.tarefas}
            extraData={this.state}
            renderItem={({item}) => {
              return (<TarefaItem tarefa={item} onEditar={(t) => this.props.navigation.navigate('tarefaEditar', {tarefaID: t.id})} onExcluir={(id) => this.excluirTarefa(id)} />)
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

const mapStateToProps = (store) => ({
  usuario: store.usuarios.email,
  tarefas: store.tarefas.tarefas
})

const mapDispatchToProps = (dispatch) => ({
  excluirTarefa: (id) => {
    return new Promise(resolve => {
      dispatch(excluirTarefa(id));

      setTimeout(() => resolve(true), 1000)
    })
    
  } 
})

export default connect(mapStateToProps, mapDispatchToProps) (TarefaScreen)
