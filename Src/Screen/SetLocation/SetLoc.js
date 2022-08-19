import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
// import DropDownPicker from 'react-native-dropdown-picker';
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
// const [value, setValue] = useState(null);

const SetLoc = props => {
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
            <View style={{width: width * 0.4}}>
              <Image source={require('../../Images/leftIcon/ArrowLeft.png')} />
            </View>
            <View style={{width: width * 0.5}}>
              <Text style={{color: 'black'}}>Profile</Text>
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
                <Image source={require('../../Images/User/User.png')} />
              </View>
            </View>
          </View>

          <View style={{height: height * 0.46}}>
            <View style={styles.textInputView}>
              <View style={{height: height * 0.05}}>
                <TextInput
                  placeholder="Arun Kumar"
                  placeholderTextColor={'#555555'}
                  style={{color: 'black'}}></TextInput>
              </View>
            </View>
            <View style={styles.textInputView}>
              <View style={{height: height * 0.05}}>
                <TextInput
                  placeholder="Arunk4it@gmail.com"
                  placeholderTextColor={'#555555'}
                  style={{color: 'black'}}></TextInput>
              </View>
            </View>
            <View style={styles.phoneInputView}>
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
              <View
                style={{
                  height: height * 0.05,
                  width: width * 0.6,
                  // backgroundColor: 'cyan',
                }}>
                <TextInput
                  placeholder="480-896-3193"
                  placeholderTextColor={'#555555'}
                  style={{color: 'black'}}></TextInput>
              </View>
              <View>
                <TouchableOpacity>
                  <Text style={{color: '#555555'}}>Edit</Text>
                </TouchableOpacity>
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
                  placeholder="New Delhi"
                  placeholderTextColor={'#555555'}
                  style={{color: 'black'}}
                  editable={false}></TextInput>
              </View>
              <View>
                <TouchableOpacity>
                  <Text style={{color: '#555555'}}>Edit</Text>
                </TouchableOpacity>
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

export default SetLoc;

const styles = StyleSheet.create({
  textInputView: {
    height: height * 0.1,
    justifyContent: 'center',
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 1,
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
});
