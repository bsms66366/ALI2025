//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable, Dimensions, Image } from 'react-native';
import * as WebBrowser from 'expo-web-browser';




export default function ({ navigation }) {
    const {height, width} = Dimensions.get('window');
    return (
      <View style={styles.v_container}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', flexWrap:'wrap' }}>
        <View style={styles.BoxBorder(height, width)}>
          <Pressable onPress = {() => WebBrowser.openBrowserAsync('http://bsms6636.brighton.domains/102/') }>
            <Image source={require('../../assets/images/interfaceIcons_Artboard1.png')} style ={styles.IconStyle} /> 
           <Text style={styles.titleText}> Module 102</Text>
          </Pressable>
        </View>
        <View style={styles.BoxBorder(height, width)}>
          <Pressable onPress = {() => WebBrowser.openBrowserAsync('http://bsms6636.brighton.domains/Year1/') }>
            <Image source={require('../../assets/images/interfaceIcons_Artboard2.png')} style ={styles.IconStyle} /> 
           <Text style={styles.titleText}> Module 103</Text>
          </Pressable>
        </View>
        <View style={styles.BoxBorder(height, width)}>
          <Pressable onPress = {() => WebBrowser.openBrowserAsync('http://bsms6636.brighton.domains/104/') }>
            <Image source={require('../../assets/images/interfaceIcons_Artboard3.png')} style ={styles.IconStyle} /> 
           <Text style={styles.titleText}> Module 104</Text>
          </Pressable>
        </View>
        <View style={styles.BoxBorder(height, width)}>
          <Pressable onPress = {() => WebBrowser.openBrowserAsync('http://www.bsms6636.brighton.domains/anatomyyear2/') }>
            <Image source={require('../../assets/images/interfaceIcons_Artboard4.png')} style ={styles.IconStyle} /> 
           <Text style={styles.titleText}> Module 202</Text>
          </Pressable>
        </View>
        <View style={styles.BoxBorder(height, width)}>
          <Pressable onPress = {() => WebBrowser.openBrowserAsync('http://bsms6636.brighton.domains/203/') }>
            <Image source={require('../../assets/images/interfaceIcons_Artboard5.png')} style ={styles.IconStyle} /> 
           <Text style={styles.titleText}> Module 203</Text>
          </Pressable>
        </View>
        <View style={styles.BoxBorder(height, width)}>
          <Pressable onPress = {() => WebBrowser.openBrowserAsync('http://ali.brighton.domains/Interface/admin/204.php') }>
            <Image source={require('../../assets/images/interfaceIcons_Artboard6.png')} style ={styles.IconStyle} /> 
           <Text style={styles.titleText}> Module 204</Text>
          </Pressable>
        </View>
      </View>
      </View>
      

      
    );
}

const styles = StyleSheet.create({

    box: {
      width: 950,
      paddingTop: 50,
      paddingLeft: 20,
      justifyContent: 'center',
    },
    
    Logo: {
        height: 80,
        alignItems: 'center',
    },
    
    IconStyle:{
        width: 110, 
        height:110,
    },
    
    BoxBorder: (height, width) => ({
        marginTop: 8,
        width: (width /3)-10, 
        height: '40%',
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
        paddingTop: 30,
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
        