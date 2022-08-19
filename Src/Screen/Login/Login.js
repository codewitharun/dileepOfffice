import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image,
  BackHandler,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const {height, width} = Dimensions.get('screen');
const Login = props => {
  const [loader, setLoader] = useState(false);
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const LoginApi = () => {
    axios({
      method: 'post',
      url: 'https://pinthetrace.pythonanywhere.com/api/auth/login/',
      data: {
        email: Email,
        password: Password,
      },
      headers: {'content-type': 'application/json'},
    })
      .then(async response => {
        console.log('==== response =====', response);
        if (response.data.responseCode === 200) {
          console.log('====== token ======', response);
          console.log();

          await AsyncStorage.setItem('Token', response?.data?.result?.token);
          props.navigation.navigate('Details');
        } else {
          alert('Something went wrong.');
        }
      })
      .catch(err => {
        console.log('==== Login Catch error=====', err);
        if (err.response.data.responseCode === 402) {
          alert('Bad Credentials');
        } else if (err.response.data.responseCode === 404) {
          alert('User not found');
        } else {
          alert('Something went wrong.');
        }
      });
  };

  const [TVisible, setTVisible] = useState(false);

  //****Step-1 */
  //***For-Email */
  // const [Email, setEmail] = useState('');
  // const [Email, setEmail] = useState('');
  const [checkEmail, setCheckEmail] = useState();
  const [errorEmail, setErrorEmail] = useState(null);
  //**For-Password */
  // const [Password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState();
  const [errorPassword, setErrorPassword] = useState(null);
  //***Step-2 */
  //**for-Email */
  const _emailValidate = email => {
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email === '' || email === undefined || email === null) {
      setErrorEmail('*Plese enter email,');
    } else if (!emailRegex.test(email)) {
      setErrorEmail('*Plese enter valid email.');
    } else {
      setErrorEmail(null);
    }
  };
  //**For-Password */
  const _passwordvalidate = pass => {
    var passwordRegex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
    if (pass === '') {
      setErrorPassword('*Please enter password.');
      setCheckPassword(false);
    } else if (!passwordRegex.test(pass)) {
      setErrorPassword('  *Please enter valid password.');
      setCheckPassword(false);
    } else {
      setErrorPassword(null);
      setCheckPassword(true);
    }
  };
  //***Step-3 */
  const validate = props => {
    let flag = true;
    if (Email === '') {
      setErrorEmail('Please enter email.');
      flag = false;
    }
    if (Password === '') {
      setErrorPassword('Please enter  password .');
      flag = false;
    }
    return flag;
  };
  /***Step-4 */
  const onSubmit = () => {
    if (validate()) {
      LoginApi();
      props.navigation.navigate('SetLoc');
      // alert('success');
      // props.navigation.navigate('Home');
    } else {
      alert('Validation Failed');
    }
  };
  // useEffect(() => {
  //   const backAction = () => {
  //     Alert.alert('Hold on!', 'Are you sure you want to go back?', [
  //       {
  //         text: 'Cancel',
  //         onPress: () => null,
  //         style: 'cancel',
  //       },
  //       {text: 'YES', onPress: () => BackHandler.exitApp()},
  //     ]);
  //     return true;
  //   };

  //   const backHandler = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     backAction,
  //   );

  //   return () => backHandler.remove();
  // }, []);
  return (
    <KeyboardAwareScrollView>
      <View style={{height: height * 1, width: width * 1}}>
        <View
          style={{
            height: height * 0.2,
            width: width * 0.9,
            alignSelf: 'center',
            justifyContent: 'center',
          }}>
          <View style={{}}>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 24}}>
              Login
            </Text>
          </View>
          <View style={{}}>
            <Text style={{color: '#555555', fontWeight: '400', fontSize: 14}}>
              Login to get started
            </Text>
          </View>
        </View>

        <View
          style={{
            height: height * 0.22,
            width: width * 0.9,
            alignSelf: 'center',
            // backgroundColor: 'red',
          }}>
          <View style={styles.InputmainView}>
            <View>
              <Text style={{color: 'black'}}>Email Address</Text>
            </View>
            <View style={styles.textInputMainView}>
              <View
                style={{
                  justifyContent: 'center',

                  height: height * 0.07,
                  width: width * 0.05,
                }}>
                <Image
                  source={require('../../Images/icons/MailIco/mail.png')}
                />
              </View>

              <View style={styles.textInputView}>
                <TextInput
                  placeholder="Enter Email"
                  style={{color: 'black'}}
                  keyboardType="email-address"
                  onChangeText={txt => {
                    setEmail(txt), _emailValidate(txt);
                  }}
                  placeholderTextColor={'#A9A9A9'}></TextInput>
              </View>
            </View>
          </View>
          {errorEmail !== null ? (
            <View
              style={{
                height: height * 0.03,
                width: width * 0.85,
                alignSelf: 'center' /*backgroundColor:'black'*/,
              }}>
              <Text style={{color: 'red', fontSize: 14}}>{errorEmail}</Text>
            </View>
          ) : null}
          <View style={styles.InputmainView}>
            <View>
              <Text style={{color: 'black'}}>Password</Text>
            </View>
            <View style={styles.textInputMainView}>
              <View
                style={{
                  justifyContent: 'center',
                  height: height * 0.07,
                  width: width * 0.05,
                }}>
                <Image source={require('../../Images/icons/pass/pass.png')} />
              </View>

              <View style={styles.textInputView}>
                <TextInput
                  placeholder="Enter Password"
                  style={{color: 'black'}}
                  onChangeText={txt => {
                    setPassword(txt), _passwordvalidate(txt);
                  }}
                  placeholderTextColor={'#A9A9A9'}></TextInput>
              </View>
            </View>
          </View>
          {errorPassword !== null ? (
            <View
              style={{
                height: height * 0.03,
                width: width * 0.98,
                alignSelf: 'center' /*backgroundColor:'black'*/,
              }}>
              <Text style={{color: 'red', fontSize: 14}}>{errorPassword}</Text>
            </View>
          ) : null}
        </View>
        <TouchableOpacity onPress={() => props.navigation.navigate('Drawer')}>
          <View
            style={{
              height: height * 0.1,
              width: width * 0.9,
              alignSelf: 'center',
            }}>
            <Text
              style={{
                color: '#F26837',
                textAlign: 'right',
                fontStyle: 'italic',
              }}>
              Forgot Password?
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              height: height * 0.1,
              width: width * 0.9,
              alignSelf: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity onPress={() => onSubmit()}>
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
                  Login
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  textInputView: {
    height: height * 0.07,
    width: width * 0.8,
    justifyContent: 'center',
    // alignSelf: 'center',
    // alignItems: 'center',
  },
  textInputMainView: {
    height: height * 0.07,
    width: width * 0.9,
    // alignSelf: 'center',
    // backgroundColor: 'green',
    flexDirection: 'row',
  },
  InputmainView: {height: height * 0.11},
});
