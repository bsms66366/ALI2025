import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, Pressable, TextInput } from 'react-native';
//import { TextInput } from 'react-native-elements'; // Import TextInput from react-native-elements
//import { PaperProvider } from 'react-native-paper';
import * as WebBrowser from 'expo-web-browser'; // Import WebBrowser from expo
import axios from 'axios';

const SearchableDropdown = () => {
  const [searchQuery, setSearchQuery] = useState('Search for Pots here...');
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://placements.bsms.ac.uk/api/PathPots');
      setData(response.data);
      setFilteredData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearch = text => {
    setSearchQuery(text);
    const filtered = data.filter(item =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const renderListItem = ({ item }) => (
    <Pressable onPress={() => openUrl(item.urlCode)}>
      <Text style={{ flex: 1,  
        color: '#bcba3e',
        backgroundColor: '#000000',
        borderColor: '#bcba40',
        borderStyle: 'dashed',
        borderRadius: 8,
        borderWidth: 1,
        padding: 8,
        marginVertical: 5,
        marginHorizontal: 8,
        marginBottom: 15
          }}>{item.name}
      </Text>
    </Pressable>
  );

  const selectItem = item => {
    console.log('Selected item:', item);
    // Do something with the selected item
  };
  
  const openUrl = async (urlCode) => {
    try {
      await WebBrowser.openBrowserAsync(urlCode);
    } catch (error) {
      console.error('Error opening URL:', error);
    }
  };

  return (
    <View style={styles.container}>
   
       <Text style={{ color: '#FFF', fontSize: 20, marginTop: 10, marginBottom: 15, textAlign: 'center' }}>
       PATHOLOGY POT CATALOGUE
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Search for Pots here..."
        /* label="Searching" 
        left={<TextInput.Icon name="search"/>}
        mode="outlined" */
        value={searchQuery}
        onChangeText={handleSearch}
      />
    
      <FlatList
        data={filteredData}
        renderItem={renderListItem}
        keyExtractor={(item, index) => index.toString()}
        style={styles.item}
      />
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#000000',
  },
  dropdown: {
    //color: '#bcba3e',
    //marginHorizontal: 25,
    borderColor: '#bcba40',
    borderStyle: 'dashed',
    //borderRadius: 20,
    marginBottom: 10,
  },
  item: {
    padding: 8,
    marginVertical: 5,
    marginHorizontal: 25,
    marginBottom: 5,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  textItem: {
    color: '#FAD607',
    fontSize: 20,
  },
  input: {
    color: "#bcba40",
    //placeholder:"Search for Pots here...",
    borderColor: "#bcba40",
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    fontSize: 20
    },
});


export default SearchableDropdown;