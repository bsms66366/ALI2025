//import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, setState } from 'react';
import { Alert, Modal, StyleSheet, Text, View, Button, Pressable, Dimensions, Image, Props, ScrollView } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { useNavigation } from '@react-navigation/native';

export default function ResourcesScreen({ navigation }) {
    const nav = useNavigation();
    const {height, width} = Dimensions.get('window');
    //const [modalVisible, setModalVisible] = useState(false);
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const handleModal = () => setIsModalVisible(() => !isModalVisible);

    return ( 
      <View style={styles.v_container}>
         <ScrollView>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', flexWrap:'wrap' }}>
        <View style={styles.BoxBorder(height, width)}>
          <Pressable onPress = {() => WebBrowser.openBrowserAsync('https://placements.bsms.ac.uk/nova/login') }>
            <Image source={require('@/assets/images/interfaceIcons_Artboard18.png')} style ={styles.IconStyle} /> 
           <Text style={styles.titleText}>Admin Area</Text>
          </Pressable>
        </View>
        <View style={styles.BoxBorder(height, width)}>
        <Pressable onPress={() => navigation.navigate('SessionNotesScreen')}>
            <Image source={require('../../assets/images/interfaceIcons_Artboard27.png')} style ={styles.IconStyle} /> 
           <Text style={styles.titleText}>UG Session Notes</Text>
          </Pressable>
        </View>
        <View style={styles.BoxBorder(height, width)}>
        <Pressable onPress={() => navigation.navigate('SearchScreen')}>
            <Image source={require('../../assets/images/interfaceIcons_Artboard9.png')} style ={styles.IconStyle} /> 
           <Text style={styles.titleText}>Pathology Pots</Text>
          </Pressable>
        </View>
        <View style={styles.BoxBorder(height, width)}>
          <Pressable onPress = {() => WebBrowser.openBrowserAsync('https://www.clinicalkey.com/#!/browse/book/3-s2.0-C20150000041') }>
            <Image source={require('../../assets/images/interfaceIcons_Artboard29.png')} style ={styles.IconStyle} /> 
           <Text style={styles.titleText}> Clinical Key</Text>
          </Pressable>
        </View>
        <View style={styles.BoxBorder(height, width)}>
          <Pressable onPress = {() => WebBrowser.openBrowserAsync('https://ali.brighton.domains/360Tour/index.html') }>
            <Image source={require('../../assets/images/interfaceIcons_Artboard28.png')} style ={styles.IconStyle} /> 
           <Text style={styles.titleText}> 360 Lab Tour</Text>
          </Pressable>
        </View>
        <View style={styles.BoxBorder(height, width)}>
          <Pressable onPress = {() => WebBrowser.openBrowserAsync('https://universityofsussex.eu.qualtrics.com/jfe/form/SV_egtaH07LwYrxuvP') }>
            <Image source={require('../../assets/images/interfaceIcons_Artboard19.png')} style ={styles.IconStyle} /> 
           <Text style={styles.titleText}>Feedback form</Text>
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
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    BoxBorder: (height, width) => ({
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
        paddingTop: 10,
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
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
    });
        