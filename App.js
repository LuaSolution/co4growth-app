import React from 'react'
import { WebView } from 'react-native-webview'

const App = () => {
  return (
    <WebView
      useWebKit
      allowUniversalAccessFromFileURLs
      mixedContentMode="always"
      originWhitelist={['*']}
      cacheEnabled={false}
      source={{ uri: 'http://103.92.26.252:2088/' }}
    />)
};

export default App;