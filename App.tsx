import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Calculator from "./src/components/Calculator";
import * as styles from "./src/styles";

export default function App() {
  return (
    <View style={stylesheet.container}>
      <View style={stylesheet.titleView}>
        <Text style={styles.Font.title}>Calcul du salaire Brut en Net</Text>
      </View>
      <View style={stylesheet.contentView}>
        <Calculator />
      </View>
    </View>
  );
}

const stylesheet = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: styles.Colors.background.main,
    alignItems: "center",
    justifyContent: "center",
  },
  titleView: {
    flex: 10,
    justifyContent: "center",
    marginTop: 20,
  },
  contentView: {
    flex: 90,
    justifyContent: "center",
  },
});
