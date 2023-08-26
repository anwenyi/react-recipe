import React, { useLayoutEffect, useState } from "react";
import { FlatList, Text, View, TouchableHighlight, Image, Searchbar } from "react-native";
import styles from "./styles";
import { recipes } from "../../data/dataArrays";
import MenuImage from "../../components/MenuImage/MenuImage";
import { getCategoryName, getRecipesByRecipeName, getRecipesByCategoryName, getRecipesByIngredientName } from "../../data/MockDataAPI";
import { FAB, TextInput } from 'react-native-paper';
export default function HomeScreen(props) {
  const { navigation } = props;
  console.log(props.extra)

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <MenuImage
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
      headerRight: () => <View />,
    });
  }, []);

  const onPressRecipe = (item) => {
    navigation.navigate("Recipe", { item });
  };

  // const handleSearch = (text) => {
  //   setValue(text);
  //   var recipeArray1 = getRecipesByRecipeName(text);
  //   var recipeArray2 = getRecipesByCategoryName(text);
  //   var recipeArray3 = getRecipesByIngredientName(text);
  //   var aux = recipeArray1.concat(recipeArray2);
  //   var recipeArray = [...new Set(aux)];

  //   if (text == "") {
  //     setData([]);
  //   } else {
  //     setData(recipeArray);
  //   }
  // };

  if (props.extra == "") {
    data = recipes;
  } else {
    data = getRecipesByRecipeName(props.extra);
  }



  const renderRecipes = ({ item }) => (
    <TouchableHighlight onPress={() => onPressRecipe(item)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
      </View>
    </TouchableHighlight>
    
  );

  return (
    <View>
      
      <FlatList vertical showsVerticalScrollIndicator={false} numColumns={3} data={data} renderItem={renderRecipes} keyExtractor={(item) => `${item.recipeId}`} />
      
    </View>
    
  );
}
