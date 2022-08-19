import {StyleSheet, Text, View,Image, TouchableOpacity,Dimensions,TextInput} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const {height, width} = Dimensions.get('screen');
const Volunteer = props => {
  return (
    <KeyboardAwareScrollView>
    <View style={{height: height * 1, width: width * 1}}>
      <View
        style={{
          height: height * 1,
          width: width * 0.9,
          alignSelf: 'center',
          //   backgroundColor: 'green',
        }}>
        <View
          style={{
            height: height * 0.1,
            width: width * 0.9,
            // backgroundColor: 'cyan',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <View style={{width: width * 0.3}}>
            <Image source={require('../../Images/leftIcon/ArrowLeft.png')} />
          </View>
          <View style={{width: width * 0.6}}>
            <Text style={{color: 'black'}}>Become a Volunteer</Text>
          </View>
        </View>
        <View
          style={{
            height: height * 0.2,
            // backgroundColor: 'red',
            width: width * 0.9,
            alignSelf: 'center',
          }}>
          <View
            style={{
              height: height * 0.2,
              //   backgroundColor: 'green',
              width: width * 0.5,
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <View style={{alignSelf: 'center'}}>
              <Text
                style={{
                  color: 'black',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 16,
                  bottom: 10,
                }}>
                Connect with us{' '}
              </Text>

              <Text
                style={{
                  color: '#ABABAB',
                  textAlign: 'center',
                  fontSize: 13,
                  lineHeight: 20,
                }}>
                To be a part of Nomadic Management Please fill the from blow
                with required credentials so we can connect you back !
              </Text>
            </View>
          </View>
        </View>

          <View style={{height: height * 0.5}}>
            <View style={styles.textInputView}>
              <View style={{height: height * 0.05}}>
                <TextInput
                  placeholder="Name"
                  placeholderTextColor={'#555555'}
                  style={{color: 'black'}}></TextInput>
              </View>
            </View>
            <View style={styles.textInputView}>
              <View style={{height: height * 0.05}}>
                <TextInput
                  placeholder="Email"
                  placeholderTextColor={'#555555'}
                  style={{color: 'black'}}></TextInput>
              </View>
            </View>
            <View style={styles.phoneInputView}>
              <View
                style={{
                  height: height * 0.05,
                  width: width * 0.6,
                  // backgroundColor: 'cyan',
                }}>
                <TextInput
                  placeholder="Phone Number"
                  placeholderTextColor={'#555555'}
                  style={{color: 'black'}}></TextInput>
              </View>
            </View>
            <View
              style={[
                styles.textInputView,
                {
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                },
              ]}>
              <View style={{height: height * 0.05}}>
                <TextInput
                  placeholder="Address"
                  placeholderTextColor={'#555555'}
                  style={{color: 'black'}}></TextInput>
              </View>
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
          </View>
        
        <View
          style={{
            height: height * 0.1,
            width: width * 0.9,
            alignSelf: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity onPress={() => props.navigation.navigate('SetLoc')}>
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
                Update
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </KeyboardAwareScrollView>
  );
};

export default Volunteer;

const styles = StyleSheet.create({
  textInputView: {
    height: height * 0.1,
    justifyContent: 'center',
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 1,
    // backgroundColor:'red'
  },
  messInputView: {
    height: height * 0.15,
    // justifyContent: 'center',
    
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 1,
    // backgroundColor:'red'
  },
  phoneInputView: {
    height: height * 0.1,
    justifyContent: 'space-between',
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  DropView: {
    height: height * 0.05,
    width: width * 0.1,
  },
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    // borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#555555',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  textInputMainView: {
    height: height * 0.07,
    width: width * 0.9,
    // alignSelf: 'center',
    // backgroundColor: 'green',
    flexDirection: 'row',
  },
});
