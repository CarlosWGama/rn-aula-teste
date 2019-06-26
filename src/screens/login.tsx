import * as React from 'react';
import { View, StyleSheet, Text, TextInput, ImageBackground, Button, TouchableOpacity, Alert } from 'react-native';
import InputPadrao from './../components/input';
import ModalLogin from '../components/modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logar } from '../store/usuarios/actions';

export interface AppProps {
  navigation: any;
  logado:string;
  storeLogar(email:string);
}

export interface AppState {
  email: string;
  senha: string;
  modalVisivel: boolean;
}

export class LoginScreen extends React.Component<AppProps, AppState> {
  
  static navigationOptions = ({navigation}) => ({
    title:'Login',
    header: null
  }) 

  //Estilo
  styles = StyleSheet.create({
    container: {
      color: 'white',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'stretch',
      padding: 10,
    }, 
    background: {
      width: '100%',
      height: '100%'
    },
    titulo: {
      fontSize: 50,
      color: 'white',
      textAlign:'center'
    },
    cadastreSe: {
      color: 'white',
      textAlign:'center',
      marginTop: 10,
      fontSize: 20,
      textDecorationLine: 'underline'
    }
  })
  
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
      modalVisivel:false
    };
    
  }

  /** Função responsável por logar o usuário  */
  logar() {
      this.props.storeLogar(this.state.email);
    
      // this.props.navigation.replace('home');
      this.props.navigation.navigate('home');

  }

  /** Renderiza a tela */
  public render() {
    const logado = this.props.logado;
    return (
      <ImageBackground source={require('./../assets/background.png')} style={this.styles.background}>
        <ModalLogin visivel={this.state.modalVisivel} onCancelar={() => this.setState({modalVisivel: false})}></ModalLogin>
        
        <View style={this.styles.container}>
            <Text style={this.styles.titulo}>
              APP TASK {logado}
            </Text>
            <Text style={this.styles.titulo}>{this.state.email}</Text>


            <InputPadrao valor={this.state.email} label="testando" mudouTexto={(email) => this.setState({email})}>
              <Text>Olá Mundo</Text>
            </InputPadrao>
            <InputPadrao valor="ola" label="Senha" />
            
            <Button onPress={() => this.logar()} title="Logar"></Button>

            <TouchableOpacity onPress={() => this.setState({modalVisivel: true})}>
              <Text style={this.styles.cadastreSe}>Não possui conta? Clique aqui!</Text>
            </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

//Primeiro Valor pega do Store e joga em Props
//O segundo pega de uma função e combina com o dispatch

const mapStoreToProps = (store) => {
  console.log('Valor', store.usuarios.email);
  return {logado: store.usuarios.email}
}

const mapActionToStore = (dispatch) => {
  return {
    storeLogar: (email) => dispatch(logar(email))
  }
}
export default connect(mapStoreToProps, mapActionToStore) (LoginScreen)