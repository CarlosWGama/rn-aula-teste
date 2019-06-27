import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Swipeable from 'react-native-swipeable';
import { Icon } from 'react-native-elements';
import { editarTarefa } from '../store/tarefas/actions';
import { connect } from 'react-redux';

export interface AppProps {
    tarefa:any
    onEditar(tarefa);
    onExcluir(id);
}

export default class TarefaItem extends React.Component<AppProps> {

    private readonly styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10
        },
        excluirBtn: {
            backgroundColor: 'red',
            color: 'white',
            flex: 1,
            padding: 10,
            // justifyContent: 'center',
            alignItems: 'flex-start',
        },
        editarBtn: {
            backgroundColor: 'blue',
            color: 'white',
            flex: 1,
            alignItems: 'flex-start',
            padding: 10
        },
        excluir: {
            backgroundColor: 'red',
            color: 'white',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'flex-end',
            paddingRight: 10,
        }
    });

    constructor(props: AppProps) {
        super(props);
    }

    public render() {

        const leftContainer = <View style={this.styles.excluir}><Text style={{color:'white'}}>Excluir</Text></View>;

        const rightButtons = [
            <TouchableOpacity style={this.styles.excluirBtn} onPress={() => this.props.onExcluir(this.props.tarefa.id)}><Icon name="remove-circle" color="white"></Icon></TouchableOpacity>,
            <TouchableOpacity style={this.styles.editarBtn}  onPress={() => this.props.onEditar(this.props.tarefa)}><Text style={{color:'white'}}>Editar</Text></TouchableOpacity>
        ]
        console.log("Descrição", this.props.tarefa.descricao);
        return (
            <Swipeable leftContent={leftContainer} rightButtons={rightButtons}  onLeftActionRelease={() => this.props.onExcluir(this.props.tarefa.id)} >
                <View style={this.styles.container}>
                    <Text>A {this.props.tarefa.descricao}</Text>
                    <Text>B {this.props.tarefa.data}</Text>
                </View>
            </Swipeable>
        );
    }
}
