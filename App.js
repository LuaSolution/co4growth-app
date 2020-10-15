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
      source={{ uri: 'http://co4growth.com/' }}
    />)
};

export default App;