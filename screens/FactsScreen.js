import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';

import header from '../styles/header.js';
//import { AntDesign } from '@expo/vector-icons';
//import { IconLeft, IconQuestion } from '../components/Icons';
//import ImageHeart from '../components/ImageHeart';
//import ButtonQuestion from '../components/ButtonQuestion';

class FactsScreen extends Component {
  //const { navigation } = this.props;
  //const analysis = navigation.getParam('analysis');
  /*
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('analysis'),
      headerRight: <ButtonQuestion />,
      //headerLeft: <IconLeft />,
      headerLeft: <ImageHeart />,
      //headerBackImage: <IconLeft />,
      headerTitleStyle: {
        fontWeight: '100',
      },
    };
  };
  */

  render() {
    const { navigation } = this.props;
    const analysis = navigation.getParam('analysis');
    return(
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text>FactsScreen</Text>
        </View>
      </View>
    );  
  }  
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: '#fdfdfd',
    justifyContent: 'center',
    alignItems: 'center',
  },  
  topContainer: {
    flex: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FactsScreen;
