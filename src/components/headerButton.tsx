import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'
export interface AppProps {
    icon:string;
    onPress():any;
}

export interface AppState {
}

export default class MenuButton extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
    <TouchableOpacity onPress={this.props.onPress}>
        <Icon name={this.props.icon}></Icon>
    </TouchableOpacity>);
  }
}
