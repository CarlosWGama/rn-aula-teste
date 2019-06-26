import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export interface AppProps {
    texto:string;
    onPress();
}

export default class ButtonModal extends React.Component<AppProps> {

    private readonly styles = StyleSheet.create({
        container: {
            margin: 5
        },
        texto: {
            fontSize: 15,
            color: 'lightblue',
            borderColor: 'lightblue',
            borderRadius: 10,
            borderWidth: 1,
            padding: 5
        }
    })

  constructor(props: AppProps) {
    super(props);
  }

  public render() {
    return (
      <View style={this.styles.container}>
            <TouchableOpacity onPress={this.props.onPress}>
                <Text style={this.styles.texto}>{this.props.texto}</Text>
            </TouchableOpacity>
      </View>
    );
  }
}
