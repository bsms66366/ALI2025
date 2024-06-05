import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Pressable, Image, Dimensions } from 'react-native';
import axios from 'axios';
import * as WebBrowser from 'expo-web-browser';


export default function App() {
  const {height, width} = Dimensions.get('window');
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://placements.bsms.ac.uk/api/spotters')
      .then(({ data }) => {
        console.log(data);
        setData(data)
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const handlePress = async (link) => {
    try {
      await WebBrowser.openBrowserAsync(link);
    } catch (error) {
      console.error('Error opening URL:', error);
    }
  };

  return (
    
    <ScrollView style={styles.container}> 
    <Text style={styles.heading}>Spotters Data</Text>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', flexWrap:'wrap' }}>
      {data.map(item => (
        <View key={item.id} style={styles.spotterContainer(height, width)}>
        <Pressable onPress={() => handlePress(item.link)}>
          <Image source={require('../../assets/images/interfaceIcons_Artboard36.png')} style={styles.image} />
          <Text style={styles.titleText}>....    {item.name} ...</Text>
          <Text>ID: {item.id}</Text>
        </Pressable>
      </View>
      
        //  <View style={styles.spotterContainer(height, width)}>
        // <Pressable
        //   key={item.id}
        //   onPress={() => handlePress(item.link)}
        // >
        //   <Image source={require('../assets/images/interfaceIcons_Artboard36.png')} style={styles.image} />
        //   <Text style={styles.titleText}>....    {item.name} ...</Text>
        //   <Text>ID: {item.id}</Text>
         
        // </Pressable>
        // </View>
      ))}
      </View>
    </ScrollView>
  );
};

// ... (styles remain the same)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#000000',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  spotterContainer:(height, width) => ({
    marginTop: 8,
    width: (width /3)-10, 
    height: '100%',
    borderColor: '#bcba40',
    borderStyle:'dotted',
    borderRadius: 8,
    borderWidth: 1,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  }),

image: {
    width: 230,
    height: 230,
    // Add any additional styling you need for the images
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  IconStyle:{
    width: 180, 
    height:180,
},
titleText: {
  fontFamily: 'Helvetica',
  fontSize: 16,
  fontWeight: 'bold',
  color:'#bcba40',
  justifyContent: 'center',
  marginRight: 4,
  paddingLeft: 30,
},

});


