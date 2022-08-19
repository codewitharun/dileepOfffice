import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
const {height, width} = Dimensions.get('screen');
const Flat = [
  {
    ImageBackground: require('../../Images/Flatlist/FlatlistIcon.png'),
    trash: require('../../Images/Flatlist/Trash/Trash.png'),
    error: require('../../Images/Error/Error.png'),
    status: 'Job Status ',
    category: 'Trash Catagroy',
    time: '8-12-2022 . 10:21AM',
    // speed: "0.7 km/h",
  },
  {
    ImageBackground: require('../../Images/Flatlist/FlatlistIcon.png'),
    trash: require('../../Images/Flatlist/Trash/Trash.png'),
    error: require('../../Images/Error/Error.png'),
    status: 'Job Status ',
    category: 'Trash Catagroy',
    time: '8-12-2022 . 10:21AM',
    // speed: "0.7 km/h",
  },
  {
    ImageBackground: require('../../Images/Flatlist/FlatlistIcon.png'),
    trash: require('../../Images/Flatlist/Trash/Trash.png'),
    error: require('../../Images/Error/Error.png'),
    status: 'Job Status ',
    category: 'Trash Catagroy',
    time: '8-12-2022 . 10:21AM',
    // speed: "0.7 km/h",
  },
  {
    ImageBackground: require('../../Images/Flatlist/FlatlistIcon.png'),
    trash: require('../../Images/Flatlist/Trash/Trash.png'),
    error: require('../../Images/Error/Error.png'),
    status: 'Job Status ',
    category: 'Trash Catagroy',
    time: '8-12-2022 . 10:21AM',
    // speed: "0.7 km/h",
  },
];
const History = props => {
  return (
    <View style={{height: height * 1, width: width * 1}}>
      <View
        style={{height: height * 0.2, width: width * 0.9, alignSelf: 'center'}}>
        <View
          style={{
            height: height * 0.1,
            width: width * 0.9,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity onPress={() => props.navigation.navigate("Explore")}>
            <View style={{width: width * 0.2}}>
              <Image source={require('../../Images/leftIcon/ArrowLeft.png')} />
            </View>
          </TouchableOpacity>
          <View style={{width: width * 0.55}}>
            <Text style={{fontSize: 14, color: 'black'}}>History</Text>
          </View>
        </View>

        <View
          style={{
            // backgroundColor: "red",
            top: 30,
            height: height * 0.5,
            width: width * 0.9,
          }}>
          <FlatList
            data={Flat}
            showsVerticalScrollIndicator={false}
            horizontal={false}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    height: height * 0.13,
                    width: width * 0.9,
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                  }}>
                  <View style={{justifyContent: 'center'}}>
                    <Image source={item.ImageBackground} />
                  </View>
                  <View style={{justifyContent: 'center'}}>
                    <Text style={{color: 'black', fontWeight: 'bold'}}>
                      {item.status}
                    </Text>
                    <Text style={{color: 'black'}}>{item.category}</Text>
                    <Text style={{color: 'black'}}>{item.time}</Text>
                    {/* <Text style={{color: 'black'}}>{item.category}</Text> */}
                  </View>
                  <View style={{justifyContent: 'center'}}>
                    <Image source={item.trash} />
                  </View>
                  <View style={{justifyContent: 'center'}}>
                    <Image source={item.error} />
                  </View>
                </View>
              );
            }}
          />
        </View>
        <View style={{height:height*0.4, width:width*0.9, }}>
          <View style={{flexDirection:'row', alignSelf:'center', alignItems:'center', height:height*0.3, width:width*0.6}}>
<Image source={require('../../Images/Vectorear.png')} />
<Text style={{color:"black", fontWeight:'bold', fontSize:24}}>Connect With Us</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  flatslistLogs: {
    // fontFamily: "Sen-Regular",
    color: 'black',
  },
  FlatView: {
    height: height * 0.13,
    width: width * 0.9,
    // backgroundColor: "green",
    alignSelf: 'center',
  },
  FlatView2: {
    height: height * 0.13,
    width: width * 0.9,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  FShoeView: {
    // backgroundColor: "cyan",
    width: width * 0.25,
    height: height * 0.1,
  },
  FItemContainer: {
    alignSelf: 'center',
    height: height * 0.1,
    width: width * 0.4,
  },
  FTextView: {
    // backgroundColor: "red",
    width: width * 0.15,
    height: height * 0.1,
    justifyContent: 'space-between',
  },
  FSpeedView: {
    // backgroundColor: "pink",
    width: width * 0.2,
    height: height * 0.1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  FRArrowView: {
    // backgroundColor: "red",
    width: width * 0.2,
    height: height * 0.1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});
