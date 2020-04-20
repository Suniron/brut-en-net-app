import { StyleSheet } from "react-native";
import * as styles from "../../styles";

export const view = StyleSheet.create({
  main: {
    flexDirection: "row",
  },
  salaryBox: {
    margin: 20,
  },
  salaryPeriodBox: {
    margin: 5,
  },
});

export const textInput = styles.TextInput.rounded;
