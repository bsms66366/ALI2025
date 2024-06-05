import React from "react";
import * as WebBrowser from 'expo-web-browser';
import {
  Dimensions,
  Image,
  //Slider,
  Text,
  StyleSheet,
  Pressable,
  View,
  SafeAreaView,
  FlatList,
  ActivityIndicator, 
  Alert,
  TextInput
 
  //VirtualizedList
} from "react-native";
import { Asset } from "expo-asset";
import Constants from 'expo-constants';
import { Audio, Video } from "expo-av";
//import * as Font from "expo-font";
//import List from "../components/List2";
import { MaterialIcons } from "@expo/vector-icons";
//import SearchBar from 'react-native-searchbar';

const DATA = require("../../data/publicDisplay.json");

//console.log(DATA)
export default function App() {
  return (
    /* searchData(text) ,
      const newData = this.arrayholder.filter(item => {
        const itemData = item.name.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1
      });
   
      this.setState({
        data: newData,
        text: text
        })
    } */
    <SafeAreaView style={styles.container}>
      {/* <TextInput 
         style={styles.textInput}
         onChangeText={(text) => this.searchData(text)}
         value={this.state.text}
         underlineColorAndroid='transparent'
         placeholder="Search Here" /> */}
      <FlatList
        data={DATA.video.video}
        renderItem={({ item }) => (
          <Pressable onPress = {() => WebBrowser.openBrowserAsync(item.urlPath)}>
      
         <View style={styles.item}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        </Pressable> 
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: '#bcba3e',
    padding: 18,
    marginVertical: 8,
    marginHorizontal: 8,
  },
  title: {
    fontSize: 16,
  },
});






