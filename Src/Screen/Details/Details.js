import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
const {height, width} = Dimensions.get('screen');
const Details = props => {
  return (
    <View style={{width: width * 1, height: height * 1, alignSelf: 'center'}}>
      <View
        style={{
          height: height * 0.1,
          width: width * 0.9,
          alignSelf: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
          <Image source={require('../../Images/icons/Menu/Menu.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../Images/icons/Share/Share.png')} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: '#c0c0c0',
          height: height * 0.4,
          width: width * 1,
        }}></View>
      <View
        style={{
          // backgroundColor: 'green',
          height: height * 0.6,
          width: width * 1,
          // bottom: 10,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}>
        <View
          style={{
            height: height * 0.05,
            width: width * 0.9,
            alignSelf: 'center',
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 22, color: 'black'}}>
            Details and Media
          </Text>
        </View>

        <View style={styles.InputmainView}>
          <View>
            <Text style={{color: '#A9A9A9'}}>Message</Text>
          </View>
          <View style={styles.InputMainView}>
            <View style={styles.messInputView}>
              <TextInput
                placeholder="Enter Your Message here"
                placeholderTextColor={'#A9A9A9'}
                multiline={true}></TextInput>
            </View>
          </View>
        </View>

        <View
          style={{
            height: height * 0.28,
            width: width * 0.9,
            alignSelf: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Volunteer')}>
            <View
              style={{
                height: height * 0.06,
                width: width * 0.9,
                alignSelf: 'center',
                justifyContent: 'center',
                backgroundColor: '#F26837',
                borderRadius: 4,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 20,
                }}>
                PIN THE LOCATION
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  textInputView: {
    height: height * 0.07,
    width: width * 0.8,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  textInputMainView: {
    height: height * 0.07,
    width: width * 0.9,
    alignSelf: 'center',
    // backgroundColor: 'green',
    flexDirection: 'row',
  },
  InputmainView: {height: height * 0.11},
  DropView: {
    height: height * 0.05,
    width: width * 0.1,
  },
});
