import React from "react";
import {
  Text,
} from "react-native";
import styles from "./styles";

export default function RecipeScreen(props) {
  const {navation, route} = props;
  const bodyText = 'Recipe Name';
  const item = route.params?.item;
  console.log(item)
  return (
    item?<Text style={styles.infoRecipeName}>{item.title}</Text> : null
  );
}
