import React, { useRef } from 'react';
import { WebView } from 'react-native-webview';

const WebViewManager = React.forwardRef((props, ref) => {
  const webViewRef = useRef(null);

  React.useImperativeHandle(ref, () => ({
    loadBase64Image(base64) {
      webViewRef.current.injectJavaScript(`window.loadBase64Image('${base64}')`);
    },
    saveDrawing(baseImageUrl) {
      webViewRef.current.injectJavaScript(`window.saveDrawing()`)
        .then(result => {
          // Save base64 string to file
          // Use RNFetchBlob or any other library to write the file
        });
    },
    setCrosshairColor() {
      webViewRef.current.injectJavaScript(`window.setCrosshairColor()`);
    },
    setLayout(layout) {
      webViewRef.current.injectJavaScript(`window.setLayout(${layout})`);
    },
    set3dCrosshairVisible(visible) {
      webViewRef.current.injectJavaScript(`window.set3dCrosshairVisible(${visible})`);
    },
    set2dCrosshairVisible(visible) {
      webViewRef.current.injectJavaScript(`window.set2dCrosshairVisible(${visible})`);
    },
    setSliceType(sliceType) {
      webViewRef.current.injectJavaScript(`window.setSliceType(${sliceType})`);
    },
    setDragMode(dragMode) {
      webViewRef.current.injectJavaScript(`window.setDragMode(${dragMode})`);
    },
    setPenValue(penValue, isFilled, drawingEnabled) {
      webViewRef.current.injectJavaScript(`window.setPenValue(${penValue}, ${isFilled}, ${drawingEnabled})`);
    },
    setCornerText(isCorners) {
      webViewRef.current.injectJavaScript(`window.setCornerText(${isCorners})`);
    },
    setOrientationCube(isOrientationCube) {
      webViewRef.current.injectJavaScript(`window.setOrientationCube(${isOrientationCube})`);
    },
    setRadiological(isRadiological) {
      webViewRef.current.injectJavaScript(`window.setRadiological(${isRadiological})`);
    },
    moveCrosshairInVox(x, y, z) {
      webViewRef.current.injectJavaScript(`window.moveCrosshairInVox(${x}, ${y}, ${z})`);
    },
  }));

  return (
    <WebView
      ref={webViewRef}
      source={{ uri: 'file:///android_asset/index.html' }}
      style={{ flex: 1 }}
      originWhitelist={['*']}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      mixedContentMode="always"
      allowFileAccess
      allowUniversalAccessFromFileURLs
      allowsBackForwardNavigationGestures={false}
    />
  );
});

export default WebViewManager;
