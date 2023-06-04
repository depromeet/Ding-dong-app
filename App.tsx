/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useRef, useState} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {WebView as RNWebview, WebViewMessageEvent} from 'react-native-webview';

import {WEBVIEW_URI} from '@env';
import {safeAreaViewStyles} from '@/styles/webview';
import Webview from '@/components/Webview';

function App(): JSX.Element {
  const webviewRef = useRef<RNWebview>();
  const [isReloaded, setIsReloaded] = useState(false);

  /** webview 로딩 완료시 */
  const handleEndLoading = () => {
    console.log('webview loaded');
    if (!isReloaded) {
      webviewRef.current?.reload();
      setIsReloaded(true);
    }
    webviewRef.current?.postMessage(JSON.stringify({type: 'loaded'}));
  };

  /** 웹뷰에서 rn으로 보낸 메시지를 수신합니다. */
  const handleOnMessage = ({nativeEvent: {data}}: WebViewMessageEvent) => {
    // data에 웹뷰에서 보낸 값이 들어옵니다.
    console.log(data);
    try {
      const {type, message} = JSON.parse(data);
      console.log(type, message);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SafeAreaView style={safeAreaViewStyles}>
      <StatusBar />
      <Webview
        uri={WEBVIEW_URI}
        customRef={webviewRef}
        onLoadEnd={handleEndLoading}
        onMessage={handleOnMessage}
      />
    </SafeAreaView>
  );
}

export default App;
