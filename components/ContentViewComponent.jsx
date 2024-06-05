import React, { useState, useRef,useEffect } from 'react';
import { View, Text, Button, StyleSheet, Alert, Switch, Picker, ScrollView } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import axios from 'axios';
import DocumentPickerComponent from '../components/DocumentPickerComponent';
import WebViewManager from '../components/WebViewManager';

const ContentView = () => {
  const [documentPickerPresented, setDocumentPickerPresented] = useState(false);
  const [settingsSheetPresented, setSettingsSheetPresented] = useState(false);
  const [pickedDocumentURL, setPickedDocumentURL] = useState(null);
  const [base64EncodedString, setBase64EncodedString] = useState(null);
  const [sliceType, setSliceType] = useState(3); // Multiplanar
  const [layout, setLayout] = useState(0); // Auto
  const [dragType, setDragType] = useState(1); // Contrast
  const [show3dCrosshair, setShow3dCrosshair] = useState(false);
  const [show2dCrosshair, setShow2dCrosshair] = useState(true);
  const [penValue, setPenValue] = useState(1); // Red
  const [drawingEnabled, setDrawingEnabled] = useState(false);
  const [isFilled, setIsFilled] = useState(true);
  const [cornerText, setCornerText] = useState(false);
  const [orientationCube, setOrientationCube] = useState(false);
  const [radiological, setRadiological] = useState(false);
  const [showingSaveAlert, setShowingSaveAlert] = useState(false);
  const [incrementText, setIncrementText] = useState('');
  const [decrementText, setDecrementText] = useState('');
  const [sliceTypeText, setSliceTypeText] = useState('');
  
  const webViewManagerRef = useRef<WebViewManager | null>(null);

  const encodeFileToBase64 = async (uri) => {
    try {
      const response = await axios.get(uri, { responseType: 'arraybuffer' });
      const base64String = Buffer.from(response.data, 'binary').toString('base64');
      setBase64EncodedString(base64String);
    } catch (err) {
      console.error('Error reading file:', err);
    }
  };
  const handleFileSelect = async (file) => {
    const uri = await getFileUri(file);
    await encodeFileToBase64(uri);

    // Convert base64 encoded string back to binary data
    const binaryData = Buffer.from(base64EncodedString, 'base64');

    // Use the binaryData as needed
  function nearlyEqual(a, b, epsilon) {
    return Math.abs(a - b) < epsilon;
  }
  };
  const incrementSlice = () => {
    if (webViewManagerRef.current && nearlyEqual(sliceType, 0, 0.001)) {
      webViewManagerRef.current.moveCrosshairInVox(0, 0, 1);
    } else if (webViewManagerRef.current && nearlyEqual(sliceType, 1, 0.001)) {
      webViewManagerRef.current.moveCrosshairInVox(0, 1, 0);
    } else if (webViewManagerRef.current && nearlyEqual(sliceType, 2, 0.001)) {
      webViewManagerRef.current.moveCrosshairInVox(1, 0, 0);
    }
  };

  const decrementSlice = () => {
    if (webViewManagerRef.current && nearlyEqual(sliceType, 0, 0.001)) {
      webViewManagerRef.current.moveCrosshairInVox(0, 0, -1);
    } else if (webViewManagerRef.current && nearlyEqual(sliceType, 1, 0.001)) {
      webViewManagerRef.current.moveCrosshairInVox(0, -1, 0);
    } else if (webViewManagerRef.current && nearlyEqual(sliceType, 2, 0.001)) {
      webViewManagerRef.current.moveCrosshairInVox(-1, 0, 0);
    }
  };

  const rotateSliceType = () => {
    setSliceType((sliceType + 1) % 3);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {drawingEnabled && (
          <Button
            title="Save Drawing"
            onPress={() => {
              const date = new Date().toISOString();
              const dateString = `${date}.nii.gz`;
              webViewManagerRef.current.saveDrawing(
                pickedDocumentURL ? pickedDocumentURL : dateString
              );
              setShowingSaveAlert(true);
            }}
          />
        )}
        {pickedDocumentURL && (
          <Text style={styles.documentName}>
            {pickedDocumentURL.split('/').pop()}
          </Text>
        )}
        <Button
          title="Pick Document"
          onPress={() => setDocumentPickerPresented(true)}
        />
        <Button
          title="Settings"
          onPress={() => setSettingsSheetPresented(true)}
        />
      </View>
      {drawingEnabled && sliceType !== 3 && sliceType !== 4 && (
        <View style={styles.toolbar}>
          <Button title={sliceTypeText} onPress={rotateSliceType} />
          <Text>{decrementText}</Text>
          <Button title="-" onPress={decrementSlice} />
          <Text>Slice</Text>
          <Button title="+" onPress={incrementSlice} />
          <Text>{incrementText}</Text>
        </View>
      )}
      <WebViewManager ref={webViewManagerRef} />
      {documentPickerPresented && (
        <DocumentPickerComponent
          onPick={(uri) => {
            setPickedDocumentURL(uri);
            encodeFileToBase64(uri);
            setDocumentPickerPresented(false);
          }}
        />
      )}
      {settingsSheetPresented && (
        <ScrollView style={styles.settings}>
          <Button title="Dismiss" onPress={() => setSettingsSheetPresented(false)} />
          <Text>View Type</Text>
          <Picker selectedValue={sliceType} onValueChange={setSliceType}>
            <Picker.Item label="Multiplanar" value={3} />
            <Picker.Item label="Single" value={4} />
          </Picker>
          <Text>Layout</Text>
          <Picker selectedValue={layout} onValueChange={setLayout}>
            <Picker.Item label="Auto" value={0} />
            <Picker.Item label="Single Row" value={1} />
            <Picker.Item label="Single Column" value={2} />
            <Picker.Item label="Grid" value={3} />
          </Picker>
          <Text>Drag Type</Text>
          <Picker selectedValue={dragType} onValueChange={setDragType}>
            <Picker.Item label="Contrast" value={1} />
            <Picker.Item label="Brightness" value={2} />
            <Picker.Item label="Pen" value={0} />
          </Picker>
          <Text>Crosshair Color</Text>
          <Button title="Pick Color" onPress={() => webViewManagerRef.current.setCrosshairColor()} />
          <Text>Show 3D Crosshair</Text>
          <Switch value={show3dCrosshair} onValueChange={(value) => {
            setShow3dCrosshair(value);
            webViewManagerRef.current.set3dCrosshairVisible(value);
          }} />
          <Text>Show 2D Crosshair</Text>
          <Switch value={show2dCrosshair} onValueChange={(value) => {
            setShow2dCrosshair(value);
            webViewManagerRef.current.set2dCrosshairVisible(value);
          }} />
          <Text>Drawing</Text>
          <Switch value={drawingEnabled} onValueChange={(value) => {
            setDrawingEnabled(value);
            webViewManagerRef.current.setPenValue(penValue, isFilled, value);
          }} />
          {drawingEnabled && (
            <>
              <Text>Pen</Text>
              <Picker selectedValue={penValue} onValueChange={(value) => {
                setPenValue(value);
                webViewManagerRef.current.setPenValue(value, isFilled, drawingEnabled);
              }}>
                <Picker.Item label="Red" value={1} />
                <Picker.Item label="Green" value={2} />
                <Picker.Item label="Blue" value={3} />
              </Picker>
              <Text>Filled</Text>
              <Switch value={isFilled} onValueChange={(value) => {
                setIsFilled(value);
                webViewManagerRef.current.setPenValue(penValue, value, drawingEnabled);
              }} />
            </>
          )}
          <Text>Corner Text</Text>
          <Switch value={cornerText} onValueChange={(value) => {
            setCornerText(value);
            webViewManagerRef.current.setCornerText(value);
          }} />
          <Text>Orientation Cube</Text>
          <Switch value={orientationCube} onValueChange={(value) => {
            setOrientationCube(value);
            webViewManagerRef.current.setOrientationCube(value);
          }} />
          <Text>Radiological</Text>
          <Switch value={radiological} onValueChange={(value) => {
            setRadiological(value);
            webViewManagerRef.current.setRadiological(value);
          }} />
        </ScrollView>
      )}
      {showingSaveAlert && (
        <View style={styles.alert}>
          <Text>Drawing saved successfully.</Text>
          <Button title="OK" onPress={() => setShowingSaveAlert(false)} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  documentName: {
    fontSize: 16,
    color: 'black',
  },
  toolbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
  settings: {
    padding: 10,
  },
  alert: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -50 }, { translateY: -50 }],
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default ContentView;
