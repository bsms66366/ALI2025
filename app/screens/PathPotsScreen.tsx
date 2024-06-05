//import React from "react";
import React, { useEffect, useState, setState } from 'react';
import { View, ActivityIndicator, RefreshControl, StyleSheet, Text, SafeAreaView, Button, FlatList, Pressable } from 'react-native';
//import Constants from 'expo-constants';
import * as WebBrowser from 'expo-web-browser';
import {
  Dimensions,
  Image,
  //Slider,
  //SafeAreaView,
  
  Alert,
  TextInput
 
  //VirtualizedList
} from "react-native";
import { Asset } from "expo-asset";
import Constants from 'expo-constants';
import { Audio, Video } from "expo-av";
import * as Font from "expo-font";
//import List from "../components/List2";
import { MaterialIcons } from "@expo/vector-icons";
//import SearchBar from 'react-native-searchbar';
import axios from 'axios';


export default function App() {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  // const selectedCategories = [1, 28, 34, 35, 36, 37, 38, 39, 40, 41 ]; // Array of category IDs to filter
  // const filteredData = data.filter(item => selectedCategories.includes(item.category_id));
  const filteredData = data.filter(item => item.category_id === 6);
  
  //const categoryIdsToFilter = [6, 40, 50]; // Add all category IDs you want to filter
  // const filteredData = data.filter(item => categoryIdsToFilter.includes(item.category_id));
//   const [searchText, setSearchText] = useState('');


//   const searchFunction = (text) => {
//     setSearchText(text);
//   }

  useEffect(() => {
  axios.get('https://placements.bsms.ac.uk/api/PathPots')
  
      .then(({ data }) => {
        console.log(data);
        //console.log("defaultApp -> data", data.name)
        setData(data)
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  

  return (
   
    <View style={{ flex: 1, padding: 24, backgroundColor: '#000', }}>   
    <Text style={{ color: '#FFF', fontSize: 20, marginTop: 10, marginBottom:15, textAlign:"center"}}>ANATOMY PATHOLOGY POTS</Text>
    {/* <View style={styles.searchBarContainer}></View> 
    <TextInput 
          style={styles.searchBar}
          placeholderTextColor="black"
          placeholder="Search available pathology pots"
          value={searchText}
          onChangeText={text => searchFunction(text)}
        />*/}
      {isLoading ? <ActivityIndicator /> : (
        <FlatList 
          data={data}
          renderItem={({ item }) =>  {
            console.log("item", item)
            return ( 
            
                <Pressable onPress = {() => WebBrowser.openBrowserAsync(item.urlCode)}>
               
               <Text style={{ flex: 1,  
              color:'#bcba40',
              backgroundColor: '#000',
                borderColor: '#bcba40',
                borderStyle:'dotted',
                borderRadius: 8,
                borderWidth: 1,
                padding: 8,
                marginVertical: 5,
                marginHorizontal: 8,
                marginBottom: 5
                }}>{item.name}
                </Text>
                
              {/* <a href='https://placements.bsms.ac.uk/storage/{$urlCode}'>{urlCode}</a> */}
              </Pressable> 
           
            )
          }}
          
        />
      )}
    </View>
   
  );

 


//styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: Constants.statusBarHeight,
    backgroundColor: '#000',
  },

item: {
  backgroundColor: '#FAD607',
  borderRadius: 20,
  padding: 8,
  marginVertical: 5,
  marginHorizontal: 8,
  marginBottom: 15,
},
Logo: {
  height: 80,
  alignItems: 'center',
},
name: {
  fontFamily: 'Verdana',
  fontSize: 20,
  //fontWeight: "bold",
  color: "#000",

},
button: {
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 12,
  paddingHorizontal: 32,
  borderRadius: 20,
  elevation: 3,
  backgroundColor: 'black',
},
// searchBarContainer: {
//   flex: 1.5,
//   backgroundColor: '#ffffff',
//   alignItems: 'center',
//   justifyContent: 'center',
// },
// searchBar: {
//   // width: wp(80),
//   // height: hp(6),
//   borderWidth: wp(0.2),
//   borderRadius: wp(3),
//   borderColor: '#999999',
//   backgroundColor: '#ffffff',
//   marginTop: wp(7),
//   paddingLeft: wp(4.5),
//   fontSize: wp(4),
//   color: 'black'
// },
});

}








