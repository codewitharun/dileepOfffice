import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Dropdown} from 'react-native-element-dropdown';
const {height, width} = Dimensions.get('screen');
const data = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
  {label: 'Item 6', value: '6'},
  {label: 'Item 7', value: '7'},
  {label: 'Item 8', value: '8'},
];
const SignUp = props => {
  // ************ Country Code States Starts Here ************
  // ************* step 1 ***************
  const [FirstName, setFirstName] = useState('');
  const [errorFirstName, setErrorFirstName] = useState(null);

  const [LastName, setLastName] = useState('');
  const [errorLastName, setErrorLastName] = useState('');

  const [Email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState(null);

  const [Phone, setPhone] = useState('');
  const [errorPhone, setErrorPhone] = useState(null);

  const [Password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState(null);

  const [Address, setAddress] = useState('');
  const [errorAdde, setErrorAddress] = useState(null);

  // ************* step 2 ***************

  const _validateFirstName = fname => {
    var fnameRegex = /^[a-z A-Z ]{2,32}$/i;
    if (fname == '' || fname == undefined || fname == null) {
      setErrorFirstName('*Please enter first name.');
    } else if (!fnameRegex.test(fname)) {
      setErrorFirstName('*Please enter valid first name.');
    } else {
      setErrorFirstName(null);
    }
  };

  const _validateLastName = lname => {
    var lnameRegex = /^[a-z A-Z ]{2,32}$/i;
    if (lname == '' || lname == undefined || lname == null) {
      setErrorLastName('*Please enter last  name.');
    } else if (!lnameRegex.test(lname)) {
      setErrorLastName('*Please enter valid last name.');
    } else {
      setErrorLastName(null);
    }
  };

  const _emailvalidate = mail => {
    var emailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    //  /^(?:\d{10}|\w+@\w+\.\w{2,3})$/;
    if (mail === '') {
      setErrorEmail('*Please enter email.');
    } else if (!emailRegex.test(mail)) {
      setErrorEmail('*Please enter valid email.');
    } else {
      setErrorEmail(null);
    }
  };

  const _Phonevalidate = Phone => {
    var PhoneRegex = /^([0-9]){10,14}$/;
    if (Phone === '') {
      setErrorPhone('*Please enter Phone Number.');
    } else if (!PhoneRegex.test(Phone)) {
      setErrorPhone('*Please enter valid Phone Number.');
    } else {
      setErrorPhone(null);
    }
  };

  const _passwordvalidate = pass => {
    var passwordRegex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    if (pass === '') {
      setErrorPassword('*Please enter password.');
    } else if (/([A-Z]+)/g.test(pass) && pass.length < 8) {
      setErrorPassword(
        '*Please enter a special character and length must be 8 digit.',
      );
    } else if (!passwordRegex.test(pass)) {
      setErrorPassword('*Please enter valid password.');
    } else {
      setErrorPassword(null);
    }
  };

  // ************* step 3 ***************

  const validate = () => {
    let flag = true;

    if (FirstName === '') {
      setErrorFirstName('*Please enter First Name.');
      flag = false;
    }

    if (LastName === '') {
      setErrorLastName('*Please enter Last Name.');
      flag = false;
    }

    if (Email === '') {
      setErrorEmail('*Please enter email.');
      flag = false;
    }
    if (Password === '') {
      setErrorPassword('*Please enter password.');
      flag = false;
    }
    if (Phone === '') {
      setErrorPhone('*Please enter Phone Number.');
      flag = false;
    }
    if (Password === '') {
      setErrorPassword('*Please enter password.');
      flag = false;
    }

    return flag;
  };

  // ************ step 4 ************

  const onSubmit = () => {
    if (validate()) {
      // onVerifySignUp();
      props.navigation.navigate('Login');
    } else {
      alert('Mandatory field is required');
      // setModalVisible(!modalVisible);
    }
  };
  const [hidepass, setHidePass] = useState(false);
  const [check, setCheck] = useState(false);

  // ************ Country Code States Starts Here ************
  const [filterdata, setFilterdata] = useState('');
  const [countryImage, setCountryImage] = useState();
  const [contrymodal, setcontrymodal] = useState(false);
  const [open, setOpen] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'nz', value: '1'},
    {label: 'in', value: '+91'},
  ]);
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
              Create Account
            </Text>
          </View>
          <View style={{}}>
            <Text style={{color: '#555555', fontWeight: '400', fontSize: 14}}>
              Sign up to get started
            </Text>
          </View>
        </View>
        <View
          style={{
            height: height * 0.5,
            width: width * 0.9,
            alignSelf: 'center',
            // backgroundColor: 'red',
          }}>
          <View style={styles.InputmainView}>
            <View>
              <Text style={{color: 'black'}}>Name</Text>
            </View>
            <View style={styles.textInputMainView}>
              <View
                style={{
                  justifyContent: 'center',

                  height: height * 0.07,
                  width: width * 0.05,
                }}>
                <Image source={require('../../Images/icons/Name/name.png')} />
              </View>
              <View style={styles.textInputView}>
                <TextInput
                  placeholder="Enter First and Last Name"
                  placeholderTextColor={'#A9A9A9'}
                  onChangeText={txt => {
                    setFirstName(txt), _validateFirstName(txt);
                  }}></TextInput>
              </View>
            </View>
            {errorFirstName != null ? (
              <View
                style={{
                  height: height * 0.02,
                  // width: width * 1,
                  width: width / 1.3,
                  // backgroundColor: "blue",
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: 'red',
                    fontSize: 10,
                  }}>
                  {errorFirstName}
                </Text>
              </View>
            ) : null}
          </View>
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
                  placeholderTextColor={'#A9A9A9'}
                  onChangeText={txt => {
                    setEmail(txt), _emailvalidate(txt);
                  }}
                />
              </View>
            </View>
          </View>
          {errorEmail != null ? (
            <View
              style={{
                height: height * 0.015,
                width: width / 1.3,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'red',
                  fontSize: 10,
                }}>
                {errorEmail}
              </Text>
            </View>
          ) : null}
          <View style={styles.InputmainView}>
            <View>
              <Text style={{color: 'black'}}>Phone</Text>
            </View>
            <View style={styles.textInputMainView}>
              <View style={styles.DropView}>
                <Dropdown
                  style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  data={data}
                  search
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder={!isFocus ? 'Select item' : '...'}
                  searchPlaceholder="Search..."
                  value={value}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  onChange={item => {
                    setValue(item.value);
                    setIsFocus(false);
                  }}
                />
              </View>
              <View style={styles.textInputView}>
                <TextInput
                  placeholder="Phone"
                  placeholderTextColor={'#A9A9A9'}
                  onChangeText={txt => {
                    setPhone(txt), _Phonevalidate(txt);
                  }}></TextInput>
              </View>
            </View>
          </View>
          {errorPhone != null ? (
            <View
              style={{
                height: height * 0.015,
                width: width / 1.3,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'red',
                  fontSize: 10,
                }}>
                {errorPhone}
              </Text>
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
                  secureTextEntry={hidepass}
                  onChangeText={txt => {
                    setPassword(txt), _passwordvalidate(txt);
                  }}
                  placeholder="Enter Password"
                  placeholderTextColor={'#A9A9A9'}></TextInput>
              </View>
            </View>
          </View>
          {errorPassword != null ? (
            <View
              style={{
                height: height * 0.015,
                width: width / 1.3,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'red',
                  fontSize: 10,
                }}>
                {errorPassword}
              </Text>
            </View>
          ) : null}
        </View>
        <View
          style={{
            height: height * 0.1,
            width: width * 0.9,
            alignSelf: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
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
                SignUp
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SignUp;

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
});
