import {StyleSheet, Text, View,Button,Dimensions} from 'react-native';
import React from 'react';
import MapView from 'react-native-maps';
// import Drawer from 'react-native-drawer'
// import openMap from 'react-native-open-maps';

const MAPP = props => {
   
  return (
    <View style={styles.container}>
 
    </View>
  );
};

export default MAPP;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
