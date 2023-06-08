import React from 'react';
import {WebView as RNWebview, WebViewMessageEvent} from 'react-native-webview';

type WebViewProps = {
  uri: string;
  customRef?: React.MutableRefObject<RNWebview<{}> | undefined>;
  onMessage?: (event: WebViewMessageEvent) => void;
  onLoadEnd?: () => void;
};
const Webview = ({uri, customRef, onMessage, onLoadEnd}: WebViewProps) => {
  return (
    <RNWebview
      ref={ref => {
        if (!ref || !customRef) {
          return;
        }
        customRef.current = ref;
      }}
      source={{uri}}
      onLoadEnd={onLoadEnd}
      onMessage={onMessage}
      onContentProcessDidTerminate={() => {
        customRef?.current?.reload();
      }}
      originWhitelist={['*']}
      bounces={false}
      domStorageEnabled
      onShouldStartLoadWithRequest={request => request.url.startsWith('http')}
      javaScriptEnabled={true}
      thirdPartyCookiesEnabled
      sharedCookiesEnabled
    />
  );
};
export default Webview;
