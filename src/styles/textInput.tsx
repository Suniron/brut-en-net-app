import { StyleSheet } from "react-native";

export const rounded = {
  borderRadius: 50,
};

export const colors = {
  color: "black",
  backgroundColor: "ivory",
};

export const size = {
  fontSize: 20,
};

const textInput = StyleSheet.create({
  rounded: { ...rounded, ...colors, textAlign: "center", ...size },
  default: { ...colors, textAlign: "center", ...size },
});

export default textInput;
