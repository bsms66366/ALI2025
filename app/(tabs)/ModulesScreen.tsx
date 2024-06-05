import Ionicons from '@expo/vector-icons/Ionicons';
import { Platform } from 'react-native';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

//import { StatusBar } from 'expo-status-bar';


import { StyleSheet, Text, View, Button, Pressable, Dimensions, Image, ScrollView } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { NavigationContainer } from '@react-navigation/native';

//import Module102Screen from './screens/Module102Screen';
//import Module103Screen from './screens/Module103Screen';
//import Module104Screen from './screens/Module104Screen';

export default function ({ navigation }) {
    const {height, width} = Dimensions.get('window');

    /* function ModalScreen({ navigation }) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 30 }}>This is a modal!</Text>
          <Button onPress={() => navigation.goBack()} title="Dismiss" />
        </View>
      );
    }
 */
    return (
      <View style={styles.v_container}>
        <ScrollView>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', flexWrap:'wrap' }}>
        <View style={styles.boxBorder(height, width)}>
          <Pressable onPress={() => navigation.navigate('Module102Screen')}>
            <Image source={require('@/assets/images/interfaceIcons_Artboard1.png')} style ={styles.IconStyle} /> 
           <Text style={styles.titleText}> Module 102</Text>
          </Pressable>
       
        </View>
        <View style={styles.boxBorder(height, width)}>
          <Pressable onPress={() => navigation.navigate('Module103Screen')}>
            <Image source={require('@/assets/images/interfaceIcons_Artboard2.png')} style ={styles.IconStyle} /> 
           <Text style={styles.titleText}> Module 103</Text>
          </Pressable>
        </View>
        <View style={styles.boxBorder(height, width)}>
        <Pressable onPress={() => navigation.navigate('Module104Screen')}>
            <Image source={require('@/assets/images/interfaceIcons_Artboard3.png')} style ={styles.IconStyle} /> 
           <Text style={styles.titleText}> Module 104</Text>
          </Pressable>
        </View>
        <View style={styles.boxBorder(height, width)}>
        <Pressable onPress={() => navigation.navigate('Module202Screen')}>
            <Image source={require('@/assets/images/interfaceIcons_Artboard4.png')} style ={styles.IconStyle} /> 
           <Text style={styles.titleText}> Module 202</Text>
          </Pressable>
        </View>
        <View style={styles.boxBorder(height, width)}>
        <Pressable onPress={() => navigation.navigate('Module203Screen')}>
            <Image source={require('@/assets/images/interfaceIcons_Artboard5.png')} style ={styles.IconStyle} /> 
           <Text style={styles.titleText}> Module 203</Text>
          </Pressable>
        </View>
        <View style={styles.boxBorder(height, width)}>
        <Pressable onPress={() => navigation.navigate('Module204Screen')}>
            <Image source={require('@/assets/images/interfaceIcons_Artboard6.png')} style ={styles.IconStyle} /> 
           <Text style={styles.titleText}> Module 204</Text>
          </Pressable>
        </View>
      </View>
      </ScrollView>
      </View>
      

      
    );
}

const styles = StyleSheet.create({

    box: {
      width: 900,
      paddingTop: 10,
      paddingLeft: 20,
      justifyContent: 'center',
    },
    
    Logo: {
        height: 110,
        alignItems: 'center',
    },
    
    IconStyle:{
        width: 150, 
        height:150,
        marginBottom:10,
    },
    
    boxBorder: (height, width) => ({
        marginTop: 10,
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
    
    v_container: {
        flex: 1,
        flexDirection: 'row', 
        flexWrap:'wrap', 
        paddingTop: 5,
        backgroundColor: '#000000',
      },
    
      titleText: {
        fontFamily: 'Helvetica',
        fontSize: 16,
        fontWeight: 'bold',
        color:'#bcba40',
        justifyContent: 'center',
        paddingLeft: 30,
        marginBottom:30,
      },
    });
        