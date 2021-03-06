import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';

import header from '../styles/header.js';
import { AntDesign } from '@expo/vector-icons';

class Chapter1Screen extends Component {

  render() {
    const { navigation } = this.props;
    const chapter = navigation.getParam('chapter');
    return(
      <View style={styles.container}>
        <View style={header.headerContainer}>
          <View style={header.headerLeft}>
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}>
              <Text>
              <AntDesign name="left" size={30} />
              </Text>
            </TouchableOpacity>
          </View>
          <View style={header.headerCenter}>
            <Text style={{fontSize: 18}}>{ chapter }</Text>
          </View>
          <View style={header.headerRight}>
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}>
              <Text>
              <AntDesign name="question" size={30} />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.topContainer}>
          <Text>Chapter1Screen</Text>
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

export default Chapter1Screen;
