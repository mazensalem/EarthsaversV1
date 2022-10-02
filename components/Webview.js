import { View, Text, Modal } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";

export default function Webview({ uri, webviewshow, setwebviewshow }) {
  return (
    <Modal
      animationType="slide"
      visible={webviewshow}
      onRequestClose={() => {
        setwebviewshow(false);
      }}
    >
      <WebView className="flex-1 h-full" source={{ uri }} />
    </Modal>
  );
}
