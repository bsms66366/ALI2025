import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, StyleSheet, Text,SafeAreaView,FlatList } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import axios from 'axios';
import DocumentPickerComponent from '@/components/DocumentPickerComponent';
import * as WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';
import ContentViewComponent from '@/components/ContentViewComponent';
import WebViewManager from '@/components/WebViewManager';

export default function DicomViewerScreen() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://placements.bsms.ac.uk/api/dicom')
      .then(({ data }) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => console.error(error))
      // .finally(() => setLoading(true));
  }, []);

  const ViewerContent = () => {
    return (
      <SafeAreaView style={styles.container}>
        <text>Dicom Viewer</text>
     {/*  <FlatList
        data={data}
        renderItem={({item}) => <Item name={item=>item.name} />}
        keyExtractor={item => item.id}
      /> */}
    </SafeAreaView>
  );
} 

      <View style={styles.viewerContainer}>
       <Text>See Dicom Viewer here</Text>
        <ContentViewComponent />
    <WebViewManager />
      </View>
  };
<View>
{/* <FlatList 
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
              </Pressable> 
           
            )
          }}
          
        /> */}


</View>
  /* return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <ViewerContent />
      )}
    </View> 
  );*/


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewerContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
