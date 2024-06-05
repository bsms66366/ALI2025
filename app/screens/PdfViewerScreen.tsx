import React, { useState, useEffect } from 'react';
import { FlatList, View, Text, Pressable, StyleSheet, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
//import PdfViewerScreen from './screens/PdfViewerScreen';
//import { WebView } from 'expo-webview';
import axios from 'axios';

const {height, width} = Dimensions.get('window');
//export default function App() {
  const PdfViewerScreen = ({ route }) => {
    const { url } = route.params;
  
    return (
      <WebView
        source={{ uri: url }}
        style={{ flex: 1 }}
       // style={styles.pdf}
      />
    );
  };
//}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    webView: {
      flex: 1,
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    },
  });

export default PdfViewerScreen;
