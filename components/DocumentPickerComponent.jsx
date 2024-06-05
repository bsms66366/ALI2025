import React, { useState } from 'react';
import { Button, View, Text, StyleSheet, Alert } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import axios from 'axios';

const DocumentPickerComponent = ({ onPick }) => {
  const [documentName, setDocumentName] = useState(null);

  const pickDocument = async () => {
    try {
      const res = await DocumentPicker.getDocumentAsync({
        type: '*/*',
      });
      if (res.type === 'success') {
        const { name, uri } = res;
        setDocumentName(name || 'Unnamed document');
        onPick(uri);
      } else {
        throw new Error('Failed to pick document');
      }
    } catch (err) {
      if (err.code === 'E_PICKER_CANCELLED') {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        Alert.alert('Error', 'An error occurred while picking the document');
        console.error(err);
      }
    }
  };
  const uploadDocument = async (uri) => {
    try {
      const formData = new FormData();
      formData.append('file', {
        uri,
        type: 'application/octet-stream',
        name: documentName,
      });
  
      const response = await axios.post('YOUR_UPLOAD_URL', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      console.log('Upload response:', response.data);
    } catch (error) {
      console.error('Error uploading document:', error);
    }
  };
  
  // Call this function within the pickDocument function after setting the document name
  uploadDocument(uri);
  
  return (
    <View style={styles.container}>
      <Button title="Pick Document" onPress={pickDocument} />
      {documentName && <Text style={styles.text}>Selected: {documentName}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  text: {
    marginTop: 10,
    color: 'black',
  },
});

export default DocumentPickerComponent;
