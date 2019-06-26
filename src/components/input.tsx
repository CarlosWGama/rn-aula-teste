import * as React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

export interface AppProps {
    valor:string;
    label?:string;
    mudouTexto?(texto:string):void;
}

export interface AppState {
}

export default class InputPadrao extends React.Component<AppProps, AppState> {
  
    private styles = StyleSheet.create({
        input:{
            fontSize:15,
            color: 'white',
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            borderRadius: 20,
            marginBottom: 10,
            paddingLeft: 10,
        },
        label: {
            fontSize: 20,
            color: 'white',
            marginLeft:10
        }
    });
    
    constructor(props: AppProps) {
        super(props);
        this.state = {
        };
    }

    public render() {

        let label:any = null;
        if (this.props.label != null)
            label = <Text style={this.styles.label}> {this.props.label}</Text>;


        return (
        <View>
            {label}
            {this.props.children}
            <TextInput style={this.styles.input} placeholder="Seu texto" value={this.props.valor} onChangeText={ (texto) => this.props.mudouTexto(texto)}></TextInput>
            
        </View>);
    }
}
