import React, { useEffect, useState } from "react";
import { Dimensions, Platform, ViewStyle } from "react-native";
import { WebView, WebViewMessageEvent } from "react-native-webview";
import { Asset } from 'expo-asset';

const Quill = (props: Props) => {
  const [uri, setUri] = useState("");

  const options = JSON.stringify({
    placeholder: "请输入...",
    modules: {
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        [{ list: "ordered" }, { list: "bullet" }],
      ],
    },
    ...props.options,
    theme: "snow",
  });
  const injectedJavaScriptBeforeContentLoaded = `window.options=${options}`;
  const injectedJavaScript = `document.querySelector('#editor').children[0].innerHTML="${props.defaultValue}"`;

  const onMessage = (e: WebViewMessageEvent) => {
    const data = JSON.parse(e.nativeEvent.data);
    if (data.type === "onChange") {
      props.onChange(data.message);
    }
  };

  useEffect(() => {
    async function assets(){
      const [{ localUri }] = await Asset.loadAsync(require('../../../assets/quilljs/index.html'));
      setUri(localUri)
    }
    assets()
  },[])

  return (
    <WebView
      onMessage={onMessage}
      onError={(error) => {
        console.log(error);
      }}
      source={
        Platform.OS === "ios"
          ? require("../../../assets/quilljs/index.html")
          : { uri: uri }
      }
      javaScriptEnabled
      allowFileAccess={true}
      injectedJavaScriptBeforeContentLoaded={
        injectedJavaScriptBeforeContentLoaded
      }
      injectedJavaScript={injectedJavaScript}
      style={{
        height: Dimensions.get("window").height - 42,
        width: Dimensions.get("window").width,
        flex: 1,
        ...props.style,
      }}
    />
  );
};

export default Quill;