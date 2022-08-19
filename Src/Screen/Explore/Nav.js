import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
const {height, width} = Dimensions.get('screen');
const Nav = props => {
  return (

      <View
        style={{width: width * 0.9, height: height * 1, alignSelf: 'center'}}>
        <View
          style={{
            height: height * 0.1,
            width: width * 0.9,
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity>
            <Image source={require('../../Images/icons/Menu/Menu.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../Images/icons/Share/Share.png')} />
          </TouchableOpacity>
        </View>
        </View>
   
  );
};

export default Nav;

const styles = StyleSheet.create({});
