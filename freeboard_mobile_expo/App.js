import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  return <WebView source={{ uri: "https://goranii.shop" }} />;
  // const onPressButton = () => {
  //   alert("버튼 클릭");
  // };
  // return (
  //   <View style={styles.container}>
  //     <Text>Hello world</Text>
  //     <StatusBar style="auto" />
  //     <Button title="등록하기" onPress={onPressButton} />
  //     <TouchableOpacity>
  //       <Image />
  //     </TouchableOpacity>
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
