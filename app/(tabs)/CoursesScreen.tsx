import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Dimensions, Image, ScrollView, Pressable } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { NavigationProp, ParamListBase, useNavigation, NavigationContainer } from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { GestureResponderEvent } from "react-native";

export default function ({ navigation }: { navigation: NavigationProp<ParamListBase, string> }) {
  const { height, width } = Dimensions.get('window');
  //const navigate = useNavigation();

const boxBorderStyle = {
    marginTop: 10,
    width: (width / 3) - 5,
    height: '100%',
    borderColor: '#bcba40',
    borderStyle: 'dotted',
    borderRadius: 8,
    borderWidth: 1,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <View style={styles.v_container}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap' }}>
        <View style={[boxBorderStyle, { width: (width / 2) - 2 }]}>
          <Pressable onPress={() => navigation.navigate("PAScreen")}>
            <Image source={require('@/assets/images/interfaceIcons_Artboard7.png')} style={styles.IconStyle} />
            <Text style={styles.titleText}>Physicians Associates</Text>
          </Pressable>
        </View>
  
        <View style={[boxBorderStyle, { width: (width / 2) - 10 }]}>
          <Pressable onPress={() => navigation.navigate('MedNeuroScreen')}>
            <Image source={require('@/assets/images/interfaceIcons_Artboard30.png')} style={styles.IconStyle} />
            <Text style={styles.titleText}>Medical Neuroscience</Text>
          </Pressable>
        </View>
  
        <View style={[boxBorderStyle, { width: (width / 3) - 10 }]}>
          <Pressable onPress={() => navigation.navigate('BioMedScreen')}>
            <Image source={require('@/assets/images/interfaceIcons_Artboard31.png')} style={styles.IconStyle} />
            <Text style={styles.titleText}>Biomedical Science</Text>
          </Pressable>
        </View>
  
        <View style={[boxBorderStyle, { width: (width / 3) - 10 }]}>
          <Pressable onPress={() => navigation.navigate('PostGradScreen')}>
            <Image source={require('@/assets/images/interfaceIcons_Artboard32.png')} style={styles.IconStyle} />
            <Text style={styles.titleText}>Post Graduate</Text>
          </Pressable>
        </View>
  
        <View style={[boxBorderStyle, { width: (width / 3) - 10 }]}>
          <Pressable onPress={() => navigation.navigate('HealthProfScreen')}>
            <Image source={require('@/assets/images/interfaceIcons_Artboard22.png')} style={styles.IconStyle} />
            <Text style={styles.titleText}>Health Professionals</Text>
          </Pressable>
        </View>
  
        <View style={[boxBorderStyle, { width: (width / 3) - 10 }]}>
          <Pressable onPress={() => navigation.navigate('PubDisScreen')}>
            <Image source={require('@/assets/images/interfaceIcons_Artboard24.png')} style={styles.IconStyle} />
            <Text style={styles.titleText}>Public Display</Text>
          </Pressable>
        </View>
      </View>
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
        