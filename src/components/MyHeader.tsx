import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Header } from 'react-native-elements';
import MenuButton from './headerButton';

export interface AppProps {
    hasMenuButton?:boolean;
    hasBackButton?:boolean;
    navigation?:any;
    title: string;
}

export interface AppState {
}

export default class MyHeader extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
    };
  }

  public render() {

    let leftContent = null;
    if (this.props.hasBackButton)
        leftContent = <MenuButton icon="arrow-back" onPress={() => this.props.navigation.goBack()}></MenuButton>
    
    if (this.props.hasMenuButton)
        leftContent = <MenuButton icon="menu" onPress={() => this.props.navigation.openDrawer()}></MenuButton>

    return (
        <Header leftComponent={leftContent} centerComponent={{text: this.props.title}} containerStyle={{backgroundColor:'#FFF'}}></Header>
    );
  }
}
