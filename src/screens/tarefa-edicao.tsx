import * as React from 'react';
import { View, StyleSheet, Text, Image, TextInput, Button, ToastAndroid, TouchableOpacity } from 'react-native';
import MyHeader from '../components/MyHeader';
import cameraSample from './../assets/camera_on.png';
import DatePicker from 'react-native-datepicker'
import { connect } from 'react-redux';
import { adicionarTarefa, editarTarefa } from '../store/tarefas/actions';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

export interface AppProps {
  navigation:any;
  cadastrarTarefa(email);
  editarTarefa(email);
}

export interface AppState {
  tarefa:{id: string, descricao:string, foto:any, data:string},
  canUseCamera: boolean
}

export class TarefaEdicaoScreen extends React.Component<AppProps, AppState> {

  private readonly styles = StyleSheet.create({
    container: {
      padding: 10,
    },
    datePicker: {
      width: '100%'
    },
    img: {
      height: 300,
      width: 300
    }
  });

  constructor(props: AppProps) {
    super(props);
    this.state = {
      tarefa:null,
      canUseCamera: true
    }
  }

  componentWillMount() {
    const tarefaID = this.props.navigation.getParam('tarefaID', null);
    this.setState({tarefa: {
      id: tarefaID,
      descricao: null,
      foto: cameraSample,
      data: '01/01/2020'
    }})

    this.getPermissions();
  }


  private async getPermissions() {
    let { status } = await Permissions.askAsync(Permissions.CAMERA);
    let canUseCamera = status == 'granted';
    this.setState({canUseCamera});
     
    console.log(canUseCamera);
  }

  salvar() {
    if (this.state.tarefa.id == null) {
      let { tarefa } = this.state;
      tarefa.id = (Math.random() * 100).toString();
      this.props.cadastrarTarefa(tarefa);
    } else
      this.props.editarTarefa(this.state.tarefa);

    ToastAndroid.show("Salvo", ToastAndroid.LONG);
    this.props.navigation.goBack();
  }

  async abrirCamera() {
    try {
      let resultado = await ImagePicker.launchCameraAsync({
        allowsEditing: false,
        aspect:[4,3],
        base64: true,
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        quality: 100,
      });
      console.log("Resultado", resultado);
    } catch(e) {
      console.log('Erro: ', e);
    }
    
  }

  public render() {

    return (
      <View>
          <MyHeader hasBackButton={true} title={this.state.tarefa.id != null ? 'Tarefa Edição' : 'Nova Tarefa'} navigation={this.props.navigation}></MyHeader>
          <View style={this.styles.container}>
            <Text>Descrição</Text>
            <TextInput placeholder="Digite uma descrição" value={this.state.tarefa.descricao} onChangeText={(descricao) => this.setState({tarefa: {...this.state.tarefa, descricao}})}></TextInput>
            <Text>Data</Text>
            <DatePicker style={this.styles.datePicker} date={this.state.tarefa.data} placeholder="Selecione a data" format="DD/MM/YYYY" confirmBtnText="Confirmar" cancelBtnText="Cancelar" onDateChange={(data) => this.setState({tarefa: {...this.state.tarefa, data}})}></DatePicker>
            { this.state.canUseCamera && 
              <View style={{alignItems:'center'}}>
                <TouchableOpacity onPress={this.abrirCamera}>
                  <Image source={this.state.tarefa.foto} style={[this.styles.img]}/>
                </TouchableOpacity>
              </View>
            }
            <Button title="Salvar" onPress={() => this.salvar()}></Button>
            <Text>AAA</Text>
          </View>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    cadastrarTarefa: (tarefa) => dispatch(adicionarTarefa(tarefa)),
    editarTarefa: (tarefa) => dispatch(editarTarefa(tarefa))
  }
}

export default connect(null, mapDispatchToProps) (TarefaEdicaoScreen)