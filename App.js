import React from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [data, setData] = React.useState("");

  React.useEffect(() => {
    fetch("https://localhost:9000/api")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.message);
        setData(data.message);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Help Victim!</Text>
      <View style={styles.bleutooth}>
        <Text style={styles.input}>{!data ? "Loading..." : data}</Text>
      </View>
      <Button title="Post to server" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  bleutooth: {
    alignItems: "center",
    backgroundColor: "#ff8f33",
    borderRadius: 15,
    height: 100,
    justifyContent: "center",
    marginVertical: 10,
    width: 200,
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    fontSize: 20,
  },
  text: {
    fontSize: 30,
  },
});
