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
const Select = props => {
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
            Select Location
          </Text>
        </View>
        <View
          style={{
            height: height * 0.03,
            width: width * 0.9,
            alignSelf: 'center',
          }}>
          <Text style={{color: 'grey'}}>Your Location</Text>
        </View>
        <View
          style={{
            height: height * 0.03,
            width: width * 0.9,
            alignSelf: 'center',
          }}>
          <Text style={{color: 'grey'}}>
            2972 Westheimer Rd. Santa Ana, Illinois 85486{' '}
          </Text>
        </View>
        <View
          style={{
            height: height * 0.03,
            width: width * 0.9,
            alignSelf: 'center',
          }}>
          <Text style={{color: 'grey'}}>Trash Category</Text>
        </View>
        <View
          style={{
            height: height * 0.03,
            width: width * 0.9,
            alignSelf: 'center',
            flexDirection: 'row',
            flexWrap: `wrap`,
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              height: height * 0.05,
              width: width * 0.4,
              backgroundColor: '#C0C0C0',
              // alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: 'black', textAlign: 'center'}}>
              Trash Category
            </Text>
          </View>
          <View
            style={{
              height: height * 0.05,
              width: width * 0.4,
              backgroundColor: '#C0C0C0',
              // alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: 'black', textAlign: 'center'}}>
              Trash Category
            </Text>
          </View>
          <View
            style={{
              height: height * 0.05,
              width: width * 0.4,
              backgroundColor: '#C0C0C0',
              // alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: 'black', textAlign: 'center'}}>
              Trash Category
            </Text>
          </View>
          <View
            style={{
              height: height * 0.05,
              width: width * 0.4,
              backgroundColor: '#C0C0C0',
              // alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: 'black', textAlign: 'center'}}>
              Trash Category
            </Text>
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
            onPress={() => props.navigation.navigate('Details')}>
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

export default Select;

const styles = StyleSheet.create({});
