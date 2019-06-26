import * as React from 'react';
import { View, StyleSheet, Text, Modal, TextInput, Button, TouchableOpacity } from 'react-native';
import ButtonModal from './buttonModal';

export interface AppProps {
    visivel: boolean;
    onCancelar():void;
}

export interface AppState {
    email:string;
    senha:string;
}


export default class ModalLogin extends React.Component<AppProps, AppState> {
  
    readonly styles = StyleSheet.create({
        container: {
            margin: 20,
            backgroundColor: 'white',
            color: 'black',
            // flex: 0,
            // justifyContent: 'center',
            borderRadius: 5,
            // height: 50
        },
        header: {
            backgroundColor: 'lightblue',
            alignItems: 'center',
        },
        headerText: {
            color: 'white',
            fontSize:25,
        },
        inputs: {
            borderColor: 'grey',
            borderRadius: 5,
            borderWidth: 1,
            padding: 4,
            margin:2
        },
        buttons: {
            flexDirection: 'row',
            justifyContent: 'flex-end',
        }
    })
    
    constructor(props: AppProps) {
        super(props);
        this.state = {
            email: '',
            senha: ''
        };
    }

    cadastrar() {

    }

    public render() {
        return (
            <Modal visible={this.props.visivel} animationType='slide' transparent={true}>
                <View style={{flex:1, justifyContent:'center'}}>                    
                    <View style={this.styles.container}>
                        <View style={this.styles.header}>
                            <Text style={this.styles.headerText}>App Component</Text>
                        </View>
                        <View style={{padding:20}}>
                        {this.props.children}
                        <TextInput placeholder="Digite seu email" style={this.styles.inputs}></TextInput>
                        <TextInput placeholder="Digite sua senha" style={this.styles.inputs}></TextInput>
                        <View style={this.styles.buttons}>
                            <ButtonModal onPress={this.cadastrar} texto="Confirmar"></ButtonModal>
                            <ButtonModal onPress={this.props.onCancelar} texto="Cancelar"></ButtonModal>
                        </View>
                        </View>
                    </View>
                </View>
            </Modal>
        
        );
    }
}
