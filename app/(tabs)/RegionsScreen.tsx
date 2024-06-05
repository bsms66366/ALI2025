//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable, Dimensions, Image, ScrollView } from 'react-native';
import * as WebBrowser from 'expo-web-browser';




export default function ({ navigation }) {
    const {height, width} = Dimensions.get('window');
    return ( 
      <View style={styles.v_container}>
        <ScrollView>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', flexWrap:'wrap' }}>
        <View style={styles.boxBorder(height, width)}>
        <Pressable onPress={() => navigation.navigate('IntroductionsScreen')}>
            <Image source={require('../../assets/images/interfaceIcons_Artboard25.png')} style ={styles.IconStyle} /> 
           <Text style={styles.titleText}>INTRODUCTION TO...</Text>
          </Pressable>
        </View>
        <View style={styles.boxBorder(height, width)}>
        <Pressable onPress={() => navigation.navigate('HeadNeckScreen')}>
            <Image source={require('../../assets/images/interfaceIcons_Artboard4.png')} style ={styles.IconStyle} /> 
           <Text style={styles.titleText}> HEAD AND NECK</Text>
          </Pressable>
        </View>
        <View style={styles.boxBorder(height, width)}>
        <Pressable onPress={() => navigation.navigate('ENTScreen')}>
            <Image source={require('../../assets/images/interfaceIcons_Artboard35.png')} style ={styles.IconStyle} /> 
           <Text style={styles.titleText}> EAR NOSE AND THROAT</Text>
          </Pressable>
        </View>
        <View style={styles.boxBorder(height, width)}>
        <Pressable onPress={() => navigation.navigate('ThoraxScreen')}>
            <Image source={require('../../assets/images/interfaceIcons_Artboard2.png')} style ={styles.IconStyle} /> 
           <Text style={styles.titleText}> THORAX</Text>
          </Pressable>
        </View>
        <View style={styles.boxBorder(height, width)}>
        <Pressable onPress={() => navigation.navigate('AbdoPelvisScreen')}>
            <Image source={require('../../assets/images/interfaceIcons_Artboard24.png')} style ={styles.IconStyle} /> 
           <Text style={styles.titleText}> ABDOMEN AND PELVIS</Text>
          </Pressable>
        </View>
        <View style={styles.boxBorder(height, width)}>
        <Pressable onPress={() => navigation.navigate('BackLimbsScreen')}>
            <Image source={require('../../assets/images/interfaceIcons_Artboard6.png')} style ={styles.IconStyle} /> 
           <Text style={styles.titleText}> BACK AND LIMBS</Text>
          </Pressable>
        </View>
        <View style={styles.boxBorder(height, width)}>
        <Pressable onPress={() => navigation.navigate('EmbryologyScreen')}>
            <Image source={require('../../assets/images/interfaceIcons_Artboard1.png')} style ={styles.IconStyle} /> 
           <Text style={styles.titleText}>EMBRYOLOGY</Text>
          </Pressable>
        </View>
        <View style={styles.boxBorder(height, width)}>
        <Pressable onPress={() => navigation.navigate('Video360Screen')}>
            <Image source={require('../../assets/images/interfaceIcons_Artboard28.png')} style ={styles.IconStyle} /> 
           <Text style={styles.titleText}> 360 VIDEO</Text>
          </Pressable>
        </View>
        <View style={styles.boxBorder(height, width)}>
        <Pressable onPress={() => navigation.navigate('PubDisScreen')}>
            <Image source={require('../../assets/images/interfaceIcons_Artboard34.png')} style ={styles.IconStyle} /> 
           <Text style={styles.titleText}> PUBLIC DISPLAY</Text>
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
      },
    });
        