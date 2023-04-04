import React from 'react';
import { StyleSheet, Text, View , StatusBar} from 'react-native';

import {colors} from './src/global/styles'
import SighInScren from './src/screens/SignInScreen'

export default function App() {

  return (
<View style={styles.container}>
    <StatusBar 
    barStyle ="light-content"
    backgroundColor = {colors.statusbar} />
       <SighInScren /> 
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});